import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import * as CourseActions from "../../store/actions/course";

const Sidebar = ({modules, toggleLesson}) => (
    <aside>
    { modules.map((module) => (
      <div key={module.id}>
        <strong>{module.title}</strong>
        <ul>
          {module.lessons.map((lesson) => (
            <li key={lesson.id}>
                {lesson.title}
                <button onClick={() =>toggleLesson(module,lesson)} >Selecionar </button>
             </li>
          ))}
        </ul>
      </div>
    ))}
  </aside>
)

const mapStateToProps = state =>({ modules:state.course.modules})
//como as actions e os atributos do dispatch tem o mesmo nome podemos usar um helper bindActionCreators
//const mapDispatchToProps = dispatch =>({
//  toggleLesson: (module,lesson)=> dispatch(CourseActions.toggleLesson(module, lesson))
//})

const mapDispatchToProps = dispatch => bindActionCreators(CourseActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
  
   

