# box-sizing
###### 定义
用于更改用于计算元素宽度和高度的默认的，可以使用此属性来模拟不正确支持CSS盒子模型规范的浏览器的行为

###### 取值范围
`box-sizing: content-box;`
`box-sizing: border-box;`

- content-box  是默认值。width = content,只有内容会被设置为width，最后的宽度要算padding+border;
背景包含了content+padding+border

- border-box padding和border是包含在width内的。width = content+padding+border;
背景包含了content+padding

> 其实一般来说，使用border-box好布局一些，但我很少去改变这个属性，都用默认值了(捂脸:
