#!/bin/bash

echo -e "🚀 클라이언트 스크립트 시작: 서버에 파일을 빌드하고 업로드합니다!"

BUILD_COMMAND="npm run build"
LOCAL_DIR="dist"
ZIP_NAME="haru.zip"
REMOTE_PATH="~/haru.zip"

# dist 폴더 삭제
echo -e "🗑️ $LOCAL_DIR 폴더 삭제 중..."
rm -rf $LOCAL_DIR
if [ $? -ne 0 ]; then
  echo -e "❌ 에러: $LOCAL_DIR 폴더 삭제에 실패했습니다."
  exit 1
fi
echo -e "✅ $LOCAL_DIR 폴더 삭제 완료."

# 빌드
echo -e "🛠️ 빌드 중..."
$BUILD_COMMAND
if [ $? -ne 0 ]; then
  echo -e "❌ 에러: 빌드에 실패했습니다."
  exit 1
fi
echo -e "✅ 빌드 완료."

# 압축
echo -e "🗜️ $ZIP_NAME 으로 압축 중..."
cd $LOCAL_DIR
zip -r $ZIP_NAME .
if [ $? -ne 0 ]; then
  echo -e "❌ 에러: $ZIP_NAME 으로 압축에 실패했습니다."
  exit 1
fi
echo -e "✅ $ZIP_NAME 으로 압축 완료."

# 원격 서버로 복사
echo -e "🚚 원격 서버로 $ZIP_NAME 파일 복사 중..."
scp -P 22 -i ~/.ssh/shinjungoh_haru.pem $ZIP_NAME ubuntu@133.186.228.178:$REMOTE_PATH
if [ $? -ne 0 ]; then
  echo -e "❌ 에러: 원격 서버로의 $ZIP_NAME 파일 복사에 실패했습니다."
  exit 1
fi
echo -e "✅ 원격 서버로 $ZIP_NAME 파일 복사 완료."

# 원격 서버에서 배포 스크립트 실행
echo -e "📡 원격 배포 스크립트 실행 중..."
ssh -i ~/.ssh/shinjungoh_haru.pem ubuntu@133.186.228.178 "sudo sh ~/sh/deploy.sh"
if [ $? -ne 0 ]; then
  echo -e "❌ 에러: 원격 배포 스크립트 실행에 실패했습니다."
  exit 1
fi
echo -e "✅ 원격 배포 스크립트 실행 완료."
