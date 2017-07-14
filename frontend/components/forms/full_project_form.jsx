import React from 'react';
import { withRouter, Route } from 'react-router-dom';
import ToggleBar from './toggle_bar_container';
import ProjectForm from './project_form_container';
import RewardForm from './reward_form_container';

class FullForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.createProject = this.props.createProject.bind(this);
    this.createReward = this.props.createReward.bind(this);
  }


  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    const { project } = this.props.incompleteForm;
    const { rewards } = this.props.incompleteForm;


    Object.keys(project).forEach( key => {
      if (key === "imageUrl" || (key === "image" && !project.image)) {
        return;
      }
      formData.append(`project[${key}]`, project[key]);
    });

    formData.append('project[rewards_attributes]', JSON.stringify(rewards));

    this.props.createProject(formData)
    .then( (project) => {
      this.props.history.push(`/projects/${project.id}`);
    },  ((errors) => alert("Must fill in all fields!"))
    );
  }

  render() {
    return (
      <section className='fullform'>

        <section className='form-render'>
          <ToggleBar />
            <Route path="/fullform/basics" component={ProjectForm} />
            <Route path="/fullform/rewards" component={RewardForm} />
        </section>


        <section className='bottom-bar'>
          <button className='submit-button button-align-right' onClick={this.handleSubmit}>Save and continue</button>
        </section>

      </section>
    )
  }

}

export default withRouter(FullForm);
