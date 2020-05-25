import "./Social.css";

function Social() {
    const head = () => (
        <React.Fragment>
            <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
                integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
                crossOrigin="anonymous"
            />
            <link rel="stylesheet" href="/static/css/styles.css" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        </React.Fragment>
    );

    return (
        <React.Fragment>
             {head()}
            <div className="icon-bar">
                <a href="https://www.facebook.com/sliphook.fish/" target="blank" className="facebook"><i class="fa fa-facebook"></i></a>
                <a href="https://twitter.com/SliphookApp" target="blank" className="twitter"><i class="fa fa-twitter"></i></a>
                <a href="https://www.instagram.com/sliphook.fish/" target="blank" className="instagram"><i class="fa fa-instagram"></i></a>
            </div>
        </React.Fragment>




            

        
    );
  }
  export default Social;