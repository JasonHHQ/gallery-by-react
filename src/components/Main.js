require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

// let yeomanImage = require('../images/yeoman.png');
//获取图片数据
let imageDatas = require('../data/imageDatas.json');
//利用自执行函数，将图片信息转换为图片Url路径信息
imageDatas = (function getImageUrl(imageDatasArr){
	for(var i=0; i<imageDatasArr.length; i++){
		var singleImageData = imageDatasArr[i]
		singleImageData.imageUrl = require('../images/'+singleImageData.fileName)
		imageDatasArr[i] = singleImageData
	}
	return imageDatasArr
})(imageDatas)

class AppComponent extends React.Component {
  render() {
    return (
      // <div className="index">
      //   <img src={yeomanImage} alt="Yeoman Generator" />
      //   <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
      //   <span>imageDatas</span>
      // </div>
      <section className="stage">
      <section className="img-sec">
      </section>
      <nav className="controller-nav"></nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
