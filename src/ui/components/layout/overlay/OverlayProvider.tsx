import {
  cloneElement,
  createContext,
  isValidElement,
  PropsWithChildren,
  ReactElement,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react';
import Overlay from '@ui/components/layout/overlay/Overlay';

export type OverlaySubmitResult = unknown;

export type OverlayOption = {
  clickOverlayClose?: boolean;
};

const defaultOverlayClickOption: OverlayOption = {
  clickOverlayClose: false,
};

export type OverlayOpenFn = (children: ReactNode, option?: OverlayOption) => Promise<OverlaySubmitResult> | null;

export const OverlayContext = createContext<OverlayOpenFn | null>(null);

type OverlayState = {
  content: ReactNode;
  options: OverlayOption;
  resolver?: (value: unknown) => void;
};

export const OverlayProvider = ({ children }: PropsWithChildren) => {
  const [overlay, setOverlay] = useState<OverlayState | null>(null);

  const openOverlay: OverlayOpenFn = useCallback((children, option) => {
    console.log('열기');
    if (isValidElement(children)) {
      setOverlay({
        content: children,
        options: { ...defaultOverlayClickOption, ...(option ?? {}) },
      });

      return new Promise((resolver) => {
        console.log('Promise 객체 생성됨');
        setOverlay((prevOverlay) => (prevOverlay ? { ...prevOverlay, resolver } : prevOverlay));
        console.log(resolver);
      }); // 모달이 켜졌을 때 여기까지 진행된 상태
    }

    return null;
  }, []);

  const handleCloseOverlay = () => {
    setOverlay(null);
    console.log('닫기');
  };

  const handleSubmitOverlay = (result: OverlaySubmitResult) => {
    console.log('제출');
    overlay?.resolver?.(result);
    console.log('Promise가 끝남!');
    handleCloseOverlay();
  };

  return (
    <OverlayContext.Provider value={openOverlay}>
      {children}
      {overlay && (
        <Overlay onClose={handleCloseOverlay} onClickOverlayClose={overlay?.options?.clickOverlayClose || false}>
          <>
            {isValidElement(overlay.content) &&
              cloneElement(overlay.content as ReactElement, {
                onClose: handleCloseOverlay,
                onSubmit: handleSubmitOverlay,
              })}
          </>
        </Overlay>
      )}
    </OverlayContext.Provider>
  );
};

export const useOverlay = () => {
  const context = useContext(OverlayContext);

  if (context === null) {
    throw new Error('useOverlay를 사용하려면 OverlayProvider를 상위에 제공해야 합니다.');
  }

  return context;
};
