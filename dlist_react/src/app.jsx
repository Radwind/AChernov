import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';

/*let App = function(properties){
    return (
        <div>
            <h2 className="header">{properties.title}</h2>
            <img src={properties.src} width='200px' height='200px' alt="1"/>
            <div>
               {
                   store.map(function(e){
                       return (
                           <div>
                            <div>{e.screenList.map((x) => <img src={x}/>)}</div>
                            <img src={e.url}/>
                           </div>
                        );
                   })
               }  
            </div>
        </div>
    );
};

ReactDOM.render(React.createElement(App, {title: 'Hello React', 
src: 'https://micropyramid.com/static/site/images/reactNativeAndroidIos.gif'}), document.getElementById('root'));
*/

/*let App = function(properties){
    return (
        <div className="list">
            {
                store.map(function(e){
                    return (
                        <div className="media testblock">
                            <div className="media-left">
                                <img src={e.url} alt="#"/>
                            </div>
                            <div className="media-body">
                                <h4 className="media-heading">{e.name}</h4>
                                {e.description}
                            </div>
                        </div>
                    );
                })  
            }
        </div>
    )
}

ReactDOM.render(React.createElement(App), document.getElementById('list'));*/


var input = document.querySelector('input');
let App = React.createClass({
        getInitialState: function(){
            return {
                list: store
            }
        },
        handleClick: function(e){
            
            var searchString = e.target.value.toLowerCase();
            this.setState ({
                list: store.filter(function(e){
                        return e.name.toLowerCase().includes(searchString);
                    }) 
            })
        },
        render: function(props){
            return (
                <div>
                <div className="inputarea">
                                    <div className="input-group input-group-lg">
                                        <span className="input-group-addon" id="sizing-addon1">Dynamic List</span>
                                        <input onChange={this.handleClick} type="search" className="form-control" placeholder="Enter the title" aria-describedby="sizing-addon1"/>
                                    </div>
                                </div>
                <div className="list">
                     {
                         this.state.list.map(function(e){
                             return (
                                 <div key={e.id} className="media testblock">
                                     <div className="media-left">
                                         <img src={e.url} alt="#"/>
                                     </div>
                                     <div className="media-body">
                                         <h4 className="media-heading">{e.name}</h4>
                                         {e.description}
                                     </div>
                                </div>
                             );
                         })  
                     }
                </div>
            </div>)
        }
});
ReactDOM.render(React.createElement(App), document.getElementById('list'));
