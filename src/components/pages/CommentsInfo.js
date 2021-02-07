import React, { Component } from 'react' 
import Parser from 'html-react-parser';


export default class CommentsInfo extends Component {

  answerComment = (id) => { 
  this.props.commentId(id); 
  } 


  render(){
    let CommentInfo = this.props.comments;
    let wordsList = this.props.words;
    return(<div className="comments container-block">

    {CommentInfo.map((comments, index) => {
      if(comments.child){
    return <React.Fragment><div key={comments.id} className="comment">  
    <h3 className="comment__author">{comments.author_name}</h3>
    <span className="comment__date">{`${comments.date.substr(0, 10)}`}</span>
    <div className="comment__message"><span className="quotestart">&#8220;</span><blockquote>{Parser(String(comments.content.rendered))}</blockquote><span className="quoteend">&#8221;</span>
    <div className="clear"></div>
    </div>
    <div onClick={this.answerComment.bind(this, comments.id)} className="comment__answer">{wordsList.commentAnswer}</div>
    </div>
     {
     comments.child.map((commentchild, indexchild) => {
      return <div key={commentchild.id} className="comment child">
      <h3 className="comment__author">{commentchild.author_name}</h3>
      <span className="comment__date">{`${commentchild.date.substr(0, 10)}`}</span>
      <div className="comment__message"><span className="quotestart">&#8220;</span><blockquote>{Parser(String(commentchild.content.rendered))}</blockquote><span className="quoteend">&#8221;</span>
      <div className="clear"></div>
      </div>
      </div>  
     })
     }
     </React.Fragment>
    
    }else{
      return <div key={comments.id} className="comment">
    <h3 className="comment__author">{comments.author_name}</h3>
    <span className="comment__date">{`${comments.date.substr(0, 10)}`}</span>

    <div className="comment__message"><span className="quotestart">&#8220;</span><blockquote>{Parser(String(comments.content.rendered))}</blockquote><span className="quoteend">&#8221;</span>
    <div className="clear"></div>
    </div>
    <div onClick={this.answerComment.bind(this, comments.id)} className="comment__answer">{wordsList.commentAnswer}</div>
    </div>    
    }
    })
    }
    
    </div>
    ) 
     
  }    
  
}




