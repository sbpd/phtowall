import React, { Component } from 'react';
import Title from './Title';
import PhotoWall from './PhotoWall';
import AddPhoto from './AddPhoto';
import { Route } from 'react-router-dom'
import App from './App'

class Main extends Component {
  constructor() {
    super()
      // screen: 'photos' // photos, addPhoto

    // this.removePhoto = this.removePhoto.bind(this);
    // this.navigate = this.navigate.bind(this);
    // console.log('constructor')
  }

  // removePhoto(postRemoved) {
  //   // console.log(postRemoved.description)
  //   this.setState((state) => ({
  //     posts: state.posts.filter(post => post !== postRemoved)
  //   }))
  // }

  // addPhoto(postSubmitted) {
  //   this.setState(state => ({
  //     posts: state.posts.concat([postSubmitted])
  //   }))
  // }

  // If using the state use this
  // navigate() {
  //   this.setState({
  //     screen: 'addPhoto'
  //   })
  // }

  // componentDidMount() {
  //   // console.log('componentDidMount')
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   //  alert('re-render')
  //   console.log(prevState.posts)
  //   console.log(this.state)
  // }

  render() {
    
    return (<div>
      <Route exact path="/" render={() => (
        <div>
          <Title title={'Photowall'} />
          <PhotoWall posts={this.props.posts} />
          {/* <PhotoWall posts={this.state.posts} onRemovePhoto={this.removePhoto} onNavigate={this.navigate} /> */}
        </div>
      )} />
      {/* <Route path="/AddPhoto" render={({history}) => (
        <AddPhoto onAddPhoto = {(addedPost)=> {
          this.addPhoto(addedPost)
          history.push('/')
        }} />
      )} /> */} 
    </div>)
  }
}

export default Main
