(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{14:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__10Mh4",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__2sRx_"}},15:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__1hnjP",pagination:"ImageGallery_pagination__1G28h"}},16:function(e,t,a){e.exports={Overlay:"Modal_Overlay__33Ypd",Modal:"Modal_Modal__3ihEg"}},27:function(e,t,a){e.exports={Button:"LoadMorebutton_Button__1eRMO"}},75:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(9),c=a.n(o),l=a(10),s=a(4),i=a(5),u=a(7),d=a(6),g=a(12),h=a.n(g);function p(e){var t=e.pageNumber,a=e.query;return h.a.get("?q=".concat(a,"&page=").concat(t,"&key=").concat("19970182-43374a871d90ac8a22fd423a0","&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.data}))}h.a.defaults.baseURL="https://pixabay.com/api/";var m=a(8),b=a.n(m),j=a(0),y=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.HandleSubmit=function(t){t.preventDefault(),e.props.HandleQueryInput(e.state.query),e.props.SetPageNumber(1)},e.HandleInputChange=function(t){0===t.target.value.length&&e.setState({query:" "}),e.setState({query:t.target.value})},e}return Object(i.a)(a,[{key:"render",value:function(){this.props.HandleQueryInput;return Object(j.jsx)("header",{className:b.a.Searchbar,children:Object(j.jsxs)("form",{className:b.a.SearchForm,onSubmit:this.HandleSubmit,children:[Object(j.jsx)("button",{className:b.a.SearchFormButton,type:"submit",children:Object(j.jsx)("span",{className:b.a.SearchFormButtonLabel,children:"Search"})}),Object(j.jsx)("input",{className:b.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:this.HandleInputChange})]})})}}]),a}(n.Component),f=a(13),S=a.n(f),O=a(17),v=a(26),_=a(14),M=a.n(_),x=function(e){var t=e.previewURL,a=e.tags,n=e.HandlePictureModal,r=e.largeImageURL,o=e.ToggleModal;return Object(j.jsx)("li",{className:M.a.ImageGalleryItem,children:Object(j.jsx)("img",{onClick:function(e){n(r),o()},src:t,alt:a,className:M.a.ImageGalleryItemImage})})},I=a(15),N=a.n(I),P=a(27),T=a.n(P),k=function(e){var t=e.HandleLoadMoreButton;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("button",{className:T.a.Button,onClick:function(){return t()},type:"button",children:"Load more"})})},w=a(28),L=a.n(w),F=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={pictures:[],totalPages:0},e.UpdatePictures=Object(v.a)(S.a.mark((function t(){var a,n,r,o,c,l;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.props,n=a.query,r=a.pageNumber,o=a.ToggleLoader,c=a.ToggleGalleryState,l=a.ToggleFound,o(),t.next=4,p({query:n,pageNumber:r}).then((function(t){return e.setState((function(e){var a=e.pictures;return{pictures:[].concat(Object(O.a)(a),Object(O.a)(t.hits)),totalPages:Math.round(t.totalHits/12)}}))})).finally((function(){return e.props.ToggleLoader()}));case 4:e.state.pictures.length>0&&c(!0),l();case 6:case"end":return t.stop()}}),t)}))),e.test=function(t){e.setState({pictures:[]}),e.props.SetPageNumber(t.selected+1)},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.UpdatePictures()}},{key:"componentDidUpdate",value:function(e,t){var a=e.query,n=e.pageNumber;a!==this.props.query&&(this.setState({pictures:[]}),this.UpdatePictures()),n!==this.props.pageNumber&&this.UpdatePictures(),""===this.props.query&&this.setState({pictures:[]}),t!==this.state&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"componentWillUnmount",value:function(){this.props.ToggleGalleryState(!1)}},{key:"render",value:function(){var e=this;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("ul",{className:N.a.ImageGallery,children:this.state.pictures.map((function(t){return Object(j.jsx)(x,Object(l.a)({ToggleModal:e.props.ToggleModal,HandlePictureModal:e.props.HandlePictureModal},t),t.id)}))}),this.state.pictures.length>0&&Object(j.jsx)(k,{HandleLoadMoreButton:this.props.HandleLoadMoreButton}),Object(j.jsx)("div",{children:Object(j.jsx)(L.a,{pageCount:this.state.totalPages,previousLabel:"previous",nextLabel:"next",breakLabel:"...",breakClassName:"break-me",marginPagesDisplayed:2,pageRangeDisplayed:5,onPageChange:this.test,containerClassName:N.a.pagination,subContainerClassName:"pages pagination",activeClassName:"active"})})]})}}]),a}(n.Component),H=a(16),C=a.n(H),B=document.querySelector("#modal"),G=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.ToggleModal()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.ToggleModal()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){this.props.ToggleModal;return Object(o.createPortal)(Object(j.jsx)("div",{onClick:this.handleBackdropClick,className:C.a.Overlay,children:Object(j.jsx)("div",{className:C.a.Modal,children:Object(j.jsx)("img",{src:this.props.bigPicture,alt:""})})}),B)}}]),a}(n.Component),q=a(29),U=a.n(q),D=(a(75),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:"",pageNumber:1,bigPicture:"",showModal:!1,loader:!1,galleryPresent:!1,nothingFound:!1},e.ToggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.ToggleFound=function(){e.setState({nothingFound:!0})},e.ToggleGalleryState=function(t){e.setState({galleryPresent:t})},e.ToggleLoader=function(){e.setState({loader:!e.state.loader})},e.HandlePictureModal=function(t){e.setState({bigPicture:t})},e.HandleQueryInput=function(t){e.setState({query:t})},e.SetPageNumber=function(t){e.setState({pageNumber:t})},e.HandleLoadMoreButton=function(){e.setState((function(e){return{pageNumber:e.pageNumber+1}}))},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"container",children:[this.state.showModal&&Object(j.jsx)(G,{ToggleModal:this.ToggleModal,bigPicture:this.state.bigPicture}),Object(j.jsx)(y,{SetPageNumber:this.SetPageNumber,HandleQueryInput:this.HandleQueryInput}),this.state.query.length>0&&Object(j.jsx)(F,Object(l.a)({ToggleFound:this.ToggleFound,ToggleGalleryState:this.ToggleGalleryState,ToggleLoader:this.ToggleLoader,ToggleModal:this.ToggleModal,HandleLoadMoreButton:this.HandleLoadMoreButton,HandlePictureModal:this.HandlePictureModal,SetPageNumber:this.SetPageNumber},this.state)),!this.state.galleryPresent&&!this.state.loader&&this.state.nothingFound&&Object(j.jsx)("span",{children:"Nothing was found"}),this.state.loader&&Object(j.jsx)(U.a,{className:"Loader",type:"TailSpin",color:"#00BFFF",height:150,width:150,timeout:6e3})]})}}]),a}(n.Component));c.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(D,{})}),document.getElementById("root"))},8:function(e,t,a){e.exports={SearchForm:"Searchbar_SearchForm__UoHRL",SearchFormButton:"Searchbar_SearchFormButton__3kjAo",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__3_tJT",SearchFormInput:"Searchbar_SearchFormInput__31aaZ",Searchbar:"Searchbar_Searchbar__2pSmi"}}},[[76,1,2]]]);
//# sourceMappingURL=main.01c3792c.chunk.js.map