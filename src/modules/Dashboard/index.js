import React, { Component } from 'react';
import { connect } from 'react-redux';
import { onOpenModal, onCloseModal } from '../../redux/action';
import { onAdd } from '../../redux/action'

import * as S from './styled.js';

class Dashboard extends Component {



  render() {
    const {
      user,
      isModalOpen,
    } = this.props;
    console.log(isModalOpen);
    return (
      <S.Container>
        <S.Title>Dashboard {user.email || ''} </S.Title>
        <button onClick={this.props.onOpenModal}>Add Pat</button>
        {
          isModalOpen && (<div> YA mogu </div>)
        }
        <S.Input placeholder='Name' type='Text'> </S.Input>
        <S.Input placeholder='Age' type='Text'> </S.Input>

      </S.Container>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  isModalOpen: state.isModalOpen,
});

const mapDispatchToProps = {
  onCloseModal,
  onOpenModal,
  onAdd,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);