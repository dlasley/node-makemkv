import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {
    Button,
    Card,
    CardBody,
    CardTitle,
} from 'reactstrap';

import DiscInfo from '../DiscInfo';

import {
    actionDiscInfo,
    subscribeToDiscInfo,
} from '../api.js';


class DiscPanel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            discInfo: {},
        };
        subscribeToDiscInfo(this.handleDiscInfo, this, this.props.driveId);
    }

    handleDiscInfo(discInfo) {
        console.log('Got disc info');
        console.debug(discInfo);
        this.setState({
            discInfo: discInfo[this.props.driveId] || {},
        });
    }

    refreshDiscInfo() {
        actionDiscInfo(this.props.driveId);
    }

    render(){
        return(
            <div className="DiscPanel">
                <Card>
                    <CardBody>
                        <CardTitle>
                            <span>
                                { this.props.driveId }
                            </span>
                            &nbsp;-&nbsp;
                            <span>
                                { this.props.discName || 'No Disc' }
                            </span>
                        </CardTitle>
                        <Button onClick={ () => this.refreshDiscInfo() }>
                            <span className="glyphicon glyphicon-refresh" />
                        </Button>
                    </CardBody>
                    <CardBody>
                        <DiscInfo driveState={ this.props.driveState }
                                  { ...this.state.discInfo }
                                  />
                    </CardBody>
                </Card>
            </div>
        );
    }
}

DiscPanel.propTypes = {
    driveId: PropTypes.number.isRequired,
    discName: PropTypes.string.isRequired,
    driveState: PropTypes.string.isRequired,
};

DiscPanel.defaultProps = {
};

export default DiscPanel;
