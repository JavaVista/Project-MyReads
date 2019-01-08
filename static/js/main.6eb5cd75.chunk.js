(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports=a(29)},24:function(e,t,a){},27:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),r=a(15),c=a.n(r),s=a(32),l=a(5),i=a(6),u=a(8),h=a(7),m=a(9),b=a(31),d=a(33),f=a(30),k=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.book.imageLinks?this.props.book.imageLinks.thumbnail:"",a=this.props,o=a.book,r=a.selectedShelf,c=this.props.book,s=c.title,l=c.authors;return n.a.createElement("div",{className:"book"},n.a.createElement("div",{className:"book-top"},n.a.createElement("div",{className:"book-cover",style:{width:128,height:193,backgroundImage:'url("'.concat(t,'")')}}),n.a.createElement("div",{className:"book-shelf-changer"},n.a.createElement("select",{value:r,onChange:function(t){return e.props.moveToShelf(o,t.target.value)}},n.a.createElement("option",{value:"move",disabled:!0},"Move to..."),n.a.createElement("option",{value:"currentlyReading"},"Currently Reading"),n.a.createElement("option",{value:"wantToRead"},"Want to Read"),n.a.createElement("option",{value:"read"},"Read"),n.a.createElement("option",{value:"none"},"None")))),n.a.createElement("div",{className:"book-title"},s),n.a.createElement("div",{className:"book-authors"},l))}}]),t}(o.Component),p=a(13),v="https://reactnd-books-api.udacity.com",E=localStorage.token;E||(E=localStorage.token=Math.random().toString(36).substr(-8));var S={Accept:"application/json",Authorization:E},y=function(){return fetch("".concat(v,"/books"),{headers:S}).then(function(e){return e.json()}).then(function(e){return e.books})},N=function(e,t){return fetch("".concat(v,"/books/").concat(e.id),{method:"PUT",headers:Object(p.a)({},S,{"Content-Type":"application/json"}),body:JSON.stringify({shelf:t})}).then(function(e){return e.json()})},g=function(e){return fetch("".concat(v,"/search"),{method:"POST",headers:Object(p.a)({},S,{"Content-Type":"application/json"}),body:JSON.stringify({query:e})}).then(function(e){return e.json()}).then(function(e){return e.books})},j=function(e){function t(){var e,a;Object(l.a)(this,t);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(n)))).state={query:"",booksSearch:[],noSearch:!1},a.updateQuery=function(e){a.setState({query:e}),a.updateBooksSearch(e)},a.updateBooksSearch=function(e){e?g(e).then(function(t){e===a.state.query&&(t.error?a.setState({booksSearch:[],noSearch:!0}):a.setState({booksSearch:t,noSearch:!1}))}):a.setState({booksSearch:[],noSearch:!1})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.booksList,o=t.moveToShelf,r=this.state.noSearch;return n.a.createElement("div",{className:"search-books"},n.a.createElement("div",{className:"search-books-bar"},n.a.createElement(f.a,{className:"close-search btn",to:"/"},"Close"),n.a.createElement("div",{className:"search-books-input-wrapper"},n.a.createElement("input",{type:"text",placeholder:"Search by title or author",value:this.state.query,onChange:function(t){return e.updateQuery(t.target.value)}}))),n.a.createElement("div",{className:"search-books-results"},n.a.createElement("ol",{className:"books-grid"},this.state.booksSearch.map(function(e){var t="none";return a.map(function(a){return a.id===e.id?t=a.shelf:""}),n.a.createElement("li",{key:e.id},n.a.createElement(k,{book:e,moveToShelf:o,selectedShelf:t}))}),r&&n.a.createElement("h3",null,"Your search did not return any books. Please, try again!"))))}}]),t}(o.Component),O=function(e){var t=e.bookList,a=e.moveToShelf;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"bookshelf"},n.a.createElement("h2",{className:"bookshelf-title"},"Currently Reading"),n.a.createElement("div",{className:"bookshelf-books"},n.a.createElement("ol",{className:"books-grid"},t.filter(function(e){return"currentlyReading"===e.shelf}).map(function(e){return n.a.createElement("li",{key:e.id},n.a.createElement(k,{book:e,moveToShelf:a,selectedShelf:"currentlyReading"}))})))),n.a.createElement("div",{className:"bookshelf"},n.a.createElement("h2",{className:"bookshelf-title"},"Want to Read"),n.a.createElement("div",{className:"bookshelf-books"},n.a.createElement("ol",{className:"books-grid"},t.filter(function(e){return"wantToRead"===e.shelf}).map(function(e){return n.a.createElement("li",{key:e.id},n.a.createElement(k,{book:e,moveToShelf:a,selectedShelf:"wantToRead"}))})))),n.a.createElement("div",{className:"bookshelf"},n.a.createElement("h2",{className:"bookshelf-title"},"Read"),n.a.createElement("div",{className:"bookshelf-books"},n.a.createElement("ol",{className:"books-grid"},t.filter(function(e){return"read"===e.shelf}).map(function(e){return n.a.createElement("li",{key:e.id},n.a.createElement(k,{book:e,moveToShelf:a,selectedShelf:"read"}))})))))},T=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"list-books"},n.a.createElement("div",{className:"list-books-title"},n.a.createElement("h1",null,"MyReads")),n.a.createElement("div",{className:"list-books-content"},n.a.createElement("div",null,n.a.createElement(O,{bookList:this.props.booksList,moveToShelf:this.props.moveToShelf}))),n.a.createElement("div",{className:"open-search"},n.a.createElement(f.a,{className:"button",to:"/search"},"Add a book")))}}]),t}(o.Component),w=(a(24),function(e){function t(){var e,a;Object(l.a)(this,t);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(n)))).state={books:[]},a.moveToShelf=function(e,t){N(e,t),y().then(function(e){a.setState({books:e})})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;y().then(function(t){e.setState({books:t})})}},{key:"render",value:function(){var e=this;return n.a.createElement(b.a,null,n.a.createElement("div",{className:"app"},n.a.createElement(d.a,{exact:!0,path:"/",render:function(){return n.a.createElement(T,{booksList:e.state.books,moveToShelf:e.moveToShelf})}}),n.a.createElement(d.a,{exact:!0,path:"/search",render:function(){return n.a.createElement(j,{booksList:e.state.books,moveToShelf:e.moveToShelf})}})))}}]),t}(n.a.Component));a(27);c.a.render(n.a.createElement(s.a,null,n.a.createElement(w,null)),document.getElementById("root"))}},[[17,2,1]]]);
//# sourceMappingURL=main.6eb5cd75.chunk.js.map