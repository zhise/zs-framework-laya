set /p projName=ÌøÔ¾ÍõÕß
set /p gitUrl=git@gitee.com:zhise/jumping_king.git

mkdir %projName%
cd %projName%
git init
git remote add origin git@gitee.com:zhise/zs-framework-laya.git
git fetch
git checkout master
git submodule init
git submodule update
git remote set-url origin %gitUrl%
move zs-framework-laya.laya %projName%.laya
echo {"proName":"%projName%","engineType":0,"proType":1,"layaProType":300,"version":"2.1.0"} > %projName%.laya
git add .
git commit -m "init"
git push --set-upstream --force origin master
git checkout  weakNetwork
git push --set-upstream --force origin weakNetwork
