const fs = require('fs')
var dayjs = require('dayjs')
var {version} = require('../package.json')
/**
 * @author yyg
 * @date 2022/5/9
 * @description build时更新版本, package.json  buildVersion字段
 */
const updateBuildVersion = () => {
    // 只在build时更新版本
    const filePath = './config/build.json'
    try {
        const packageText = fs.readFileSync(filePath, 'utf8')
        if (process.env.BUILD_ENV === undefined) return
        const packageJson = JSON.parse(packageText)
        let buildCode = ~~packageJson.buildCode
        buildCode++
        let packageRow = packageText.split('\n')
        for(let i= 0; i < packageRow.length; i++){
            if(packageRow[i].includes('"buildCode":')){
                packageRow.splice(i,1, `  "buildCode": "${buildCode}",`);
            }
            if(packageRow[i].includes('"version":')){
                packageRow.splice(i,1, `  "version": "${version}",`);
            }
            if(packageRow[i].includes('"buildDate":')){
                packageRow.splice(i,1, `  "buildDate": "${dayjs().format('YYYY-MM-DD HH:mm:ss')}"`);
                break
            }
        }
        fs.writeFileSync(filePath, packageRow.join('\n'), 'utf8')
    } catch(e) {
        console.log('初始化build.json文件')
        fs.writeFileSync(filePath, `{
  "version": "${version}",
  "buildCode": "0",
  "buildDate": "${dayjs().format('YYYY-MM-DD HH:mm:ss')}"
}`, 'utf8')
        updateBuildVersion()
    }
}
module.exports = {
    updateBuildVersion: updateBuildVersion
}

