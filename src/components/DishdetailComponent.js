import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';





class DishDetail extends Component {
    componentDidMount() {
        console.log('Dishdetail Component componentDidMount is invoked');
    }

    componentDidUpdate() {
        console.log('Dishdetail Component componentDidUpdate is invoked');
    }

    renderDish(dish) {
        return (
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }

    renderComments(comments) {
        if (comments != null) {
            return (
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {comments.map((comment) => {
                            return (
                                <li key={comment.id}>
                                    <p>{comment.comment}</p>
                                    <p>-- {comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            );
        } else {
            return (
                <div></div>
            );
        }
    }

    render() {

        console.log('Dishdetail Component render is invoked');

        if (this.props.dish != null) {
            return (
                <div className="container">
                    <div className="row">
                        {this.renderDish(this.props.dish)}
                        {this.renderComments(this.props.dish.comments)}
                    </div>
                </div>
            );
        } else {
            return (
                <div></div>
            );
        }
    }
}

export default DishDetail;


/*
// DishDetail is implemented as a functional (stateless) component
class DishDetail extends Component {


renderComments(comments) {
    if ( comments != null ) {
        return(
            <ul className="list-unstyled">
                {comments.map((comment) => {
                    return (
                        <li key={comment.id} >
                            <div>{comment.comment}</div>
                            <p>
                            &nbsp;&nbsp; --{comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                            </p>
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
                    <div className=" col-12 col-md-5 m-1" >
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
*/





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