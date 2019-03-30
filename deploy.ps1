ng build --base-href "/tneb-calc/"
if($LASTEXITCODE -eq 0)
{
    $originalLocation = Get-Location
    Set-Location -Path .\dist\tneb-app
    git init
    git add .
    git commit -m "Bismillah"
    git remote add origin "git@github.com:fareez-ahamed/tneb-calc.git"
    git branch gh-pages
    git push origin gh-pages --force
    Set-Location $originalLocation
}
