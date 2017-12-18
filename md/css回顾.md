# css常见易混淆问题汇总

### 一、css的文档流(normal flow)：感觉其实叫做常规布局规律更好

#### 1. inline元素从左到右，遇到边界换行；padding和margin只能影响宽度，高由line-height决定
>单行\多行两端对齐问题(after元素，inline-blockm;width:100%;text-align: justify;)
单行\多行文字溢出(单行：word-break;text-overflow:ellipsis; 多行:display:-webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 3;)

#### 2. block元素一个一行，宽拉满，高度由内部所有元素计算得到
> margin合并问题
定高\不定高等垂直居中问题
水平居中

### 二、堆叠顺序和堆叠上下文

#### 1.堆叠顺序，需要就试验
> 注意position带来的变化

#### 2.堆叠上下文
由某些属性或者元素触发，其实就是堆叠作用域。类似bfc
> z-index元素的堆叠规律

### 三、icon的相关处理
#### 转化为iconfont
1. 使用在线图标字体处理网站
https://icomoon.io/app

2. 使用第三方库font-carrier
https://github.com/purplebamboo/font-carrier

#### 直接使用svg
来自知乎https://zhihu.com/question/29054543/answer/49917677
用ai导出svg粘贴到html就好。
好处如下：
1. 可以是彩色的或者有渐变色。
2. 不用加载新的字体，节省一次请求。（如果已经在用icon font请忽略，可以package到一起）
3. 在图标数量极小的情况下，体积也不会差太多。毕竟css也得定义font face的，也要有几十个字符起。

#### 传统的背景图片，使用雪碧图优化

#### 张鑫旭的图标研究
[如何灵活利用免费开源图标字体-IcoMoon篇 « 张鑫旭-鑫空间-鑫生活](http://www.zhangxinxu.com/wordpress/2012/06/free-icon-font-usage-icomoon/)
[以20像素为基准的CSS网页布局实践分享 « 张鑫旭-鑫空间-鑫生活](http://www.zhangxinxu.com/wordpress/2016/03/css-layout-base-20px/)
