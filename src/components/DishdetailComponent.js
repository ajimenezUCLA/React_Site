import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

// DishDetail is implemented as a functional (stateless) component
class DishDetail extends Component {

    /*
    renderComments(comments) {
        if (comments == null) {
            return (
                <div></div>
            );
        }
        else {
            return comments.map((c) => {
                return (
                    <div className="container" >
                        <li id={c.id}>
                            <div className="row">
                                {c.comment}
                            </div>
                            <div className="row">
                                <div>
                                    {c.comment}
                                </div>
                                <div>
                                    -- {c.author}, {c.date}
                                </div>
                            </div>
                        </li>
                    </div>
                );
            });
        }
    }
*/
renderComments(comments) {
    if ( comments != null ) {
        return(
            <ul className="list-unstyled">
                {comments.map((comment) => {
                    return (
                        <li key={comment.id} >
                            <div>{comment.comment}</div>
                            <div>
                            &nbsp;&nbsp; --{comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                            </div>
                        
                            <br />
                        </li>
                    );
                })}
            </ul>
        );
    }
    else {
        return(
            <div></div>
        );
    }
}

    renderDish(dish) {
        if (dish != null) {
            return (
                <div className="row" >
                    <div className="col-12 col-md-5 m-1" >
                        <Card>
                            <CardImg top src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1" >
                        <h3>Comments</h3>
                        <ul className="list-unstyled">
                            {this.renderComments(dish.comments)}
                        </ul>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div></div>
            )
        }
    }

    render() {
        if (this.props.dish != null) {
            let {dish} = this.props;

            return (
                this.renderDish(dish)
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }
}



export default DishDetail;