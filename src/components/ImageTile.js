import React from 'react';
import './imagetile.css';
import batmansymbol from '../res/batman-blk.png';

class ImageTile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: false
        }
    }

    handleMouseEnterDetails = () => {
        this.setState({
            hover: true
        });
    }
    handleMouseLeaveDetails = () => {
        this.setState({
            hover: false
        });
    }

    render() {
        return (
            <div className="item">
                <div className="image">
                    <img src={this.props.villain.imageUrl}
                        alt="" />
                    <button onMouseEnter={this.handleMouseEnterDetails} onMouseLeave={this.handleMouseLeaveDetails} className="d-flex align-items-center justify-content-center text-dark eye"><i
                        className="material-icons p-0 m-0">visibility</i></button>
                    <button onClick={() => { this.props.onClick(this.props.villain.id) }} className="d-flex align-items-center justify-content-center text-dark add">
                        <img
                            src={batmansymbol} width="100%" height="auto" alt="" />
                    </button>
                </div>
                <div className={this.state.hover ? "details open" : "details"}>
                    {/* <div className={"details open"}> */}
                    <h4 className="text-white m-0 detailName text-truncate">{this.props.villain.name}</h4>
                    <p className="m-0 detailRating text-truncate">Danger Lv. <b className="text-white">{this.props.villain.dangerLv}</b></p>
                </div>
            </div>
        );
    }
}

// module.exports = ImageTile; // this doesnt work
export default ImageTile;