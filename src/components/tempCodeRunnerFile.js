export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: null,
      emailReady: false,
      currentEmail: { email: "" }
    };
  }

  componentDidMount() {
    const currentEmail = AuthService.getCurrentEmail();

    if (!currentEmail) this.setState({ redirect: "/home" });
    this.setState({ currentEmail: currentEmail, emailReady: true })
  }

  render() {
    // if (this.state.redirect) {
    //   return <Navigate to={this.state.redirect} />
    // }

    // const { currentEmail } = this.state;

    return (

      <div className="Profile">
        <h2>GOT QUESTIONS?</h2>
        <p>The easiest thing to do is post on
        our <a href="http://forum.kirupa.com">forums</a>.
        </p>
      </div>
    );
  }
}