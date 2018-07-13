


import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactSwipe from 'react-swipe';
import PropTypes from 'prop-types';

let swopeOptions = {
    continuous: true, speed: 400,
    auto: 2000, 
    disableScroll: false,
    showPagination: false,
    callback:function(){

        

   } 
}

class Carousel extends React.Component{

    state = {

      img : '//gfs17.gomein.net.cn/T1ogLvBjVv1RCvBVdK_400.jpg?v=20170727',
    }
    
    componentDidMount(){


      console.log(this.context.router.history);


    }

    render() {
        return (
            <ReactSwipe className="lunbotu1" swipeOptions={swopeOptions} >
                  <div><img src={this.state.img} width="100%"  className="lbt lb1" /></div>
                  <div><img src={this.state.img} width="100%"  className="lbt lb2" /></div>
                  <div><img src={this.state.img} width="100%"  className="lbt lb3" /></div>
            </ReactSwipe>

        );
    }
}

Carousel.contextTypes = {

    router: PropTypes.object.isRequired
}

export default Carousel;
