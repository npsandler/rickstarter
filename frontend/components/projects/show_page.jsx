
import React from 'react';
import { withRouter } from 'react-router-dom';

export default class ShowPage extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    // TODO: renderuserimage properly
    return   (
      <article>
        <section className='headline'>
          <section className='creator-area'>
            <div className='creator-img'>{project.creator.img}</div>
            <div className='creator-name'>{project.creator.name}</div>
          </section>
          <section className='headline-text'>
            <div className='title'>{project.title}</div>
            <div className='description'>{project.title}</div>
          </section>
        </section>

        <section className='main-content'>
          <section className='project-image'>
            <div className='image'> </div>
          </section>
        </section>
      </article>
    );

  }
}
