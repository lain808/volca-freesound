import React from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { initialize, hideModal } from '../../actions/volca.actions';
import s from './ModalUnlockIOSAudio.css';
import Modal from '../Modal';

class ModalUnlockIOSAudio extends React.PureComponent {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  };

  unlockIOSAudio() {
    console.log('unlockIOSAudio');
    this.props.dispatch(initialize());
  }

  render() {
    const { dispatch } = this.props;

    return (
      <Modal
        onClose={() => {
          dispatch(hideModal());
        }}
      >
        <div className={s.dialog_content}>
          <h2>Click</h2>
          <p>Click to enter the app</p>
          <button
            onClick={() => {
              this.unlockIOSAudio();
              dispatch(hideModal());
            }}
          >
            Ok
          </button>
        </div>
      </Modal>
    );
  }
}

export default compose(withStyles(s), connect(() => {}))(ModalUnlockIOSAudio);