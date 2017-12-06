// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  code: require("../assets/codebg.jpg"),
  js: require("../assets/JS.jpg"),
  anon: require("../assets/nickbg.jpg"),
  block: require("../assets/block_chain.jpg")
};

preloader(images);

const theme = createTheme({
  primary: "#556b2f",
  secondary: "black"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgImage={images.code} bgDarken={0.25}>
            <Heading size={1} Fit cap lineHeight={1} textColor="#ff4081">
              Grid Security
            </Heading>
            <Text lineHeight={2} textColor="white">
              Brian Phelps JR.
            </Text>
          </Slide>
          <Slide transition={["zoom", "slide"]} bgColor="primary" notes="Talk about History and what problems it solved">
            <Heading size={1} Fit cap lineHeight={1} textColor="secondary">
              Contents:
            </Heading>
            <List>
              <Appear><ListItem textColor="white">Cryptography Overview</ListItem></Appear>
              <Appear><ListItem textColor="white">Public Key Infrastructure</ListItem></Appear>
              <Appear><ListItem textColor="white">Grid Security Infrastructure</ListItem></Appear>
              <Appear><ListItem textColor="white">-----X.509 Certificates and TSL/SSL(auth and msg encryption)</ListItem></Appear>
              <Appear><ListItem textColor="white">Current Events</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} Fit cap lineHeight={1} textColor="secondary">
              SIGNIFICANCE
            </Heading>
            <Text lineHeight={2} textColor="white">
                <Layout>Importance:</Layout>
                Management of power system, network and balance management.<br />
                Offers less expensive alternative to purchasing larger platforms<br />
                Sometimes requirements exceed server platform capabilities<br />
                [ Grid - massively huge network of computers ]<br />
                [Grid Computing - application of several computers to 1 problem]

            </Text>
          </Slide>
          <Slide>
            <Heading size={1} Fit cap lineHeight={1} textColor="secondary">
                Present Security Measures
            </Heading>
            <List textColor="white">
                <ListItem>Authentication</ListItem>
                <ListItem>Authorizataion</ListItem>
                <ListItem>Intrusion Detection</ListItem>
                <ListItem>Cryptography</ListItem>
                <ListItem>Virtual Private Networks</ListItem>
                <ListItem>Firewalls</ListItem>
            </List>
          </Slide>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} Fit cap lineHeight={1} textColor="secondary">
              Authentication
            </Heading>
            <List textColor="white">
              <ListItem>Traditional Systems: authenticate client to protect server</ListItem>
              <ListItem>Grid Systems: mutual auth. required.</ListItem>
              <ListItem>AUTH METHODS: Password based Auth.</ListItem>

            </List>
          </Slide>
          <Slide>
            <Heading size={1} Fit cap lineHeight={1} textColor="secondary">
              Auth System: KERBEROS
            </Heading>
            <List textColor="white">
              <ListItem>Auth & key distribution protocol</ListItem>
              <ListItem>Used with symmetric encryption systems</ListItem>
              <ListItem>Requires trusted online CA</ListItem>
            </List>
          </Slide>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} Fit cap lineHeight={1} textColor="secondary">
              Authorization
            </Heading>
            <List textColor="white">
                <ListItem>Process that determines whether a particular operation is allowed.</ListItem>
                <ListItem>Grids: determine whether access to resource is allowed</ListItem>
                <ListItem>eg) access control lists associated w/ resources</ListItem>
                <ListItem>-----or authorized programs</ListItem>
            </List>
          </Slide>
          <Slide>
            <Heading size={1} Fit cap lineHeight={1.5} textColor="secondary">
              Intrusion Detection
            </Heading>
            <List textColor="white">
              <ListItem>Keeps track of network activity</ListItem>
              <ListItem>checks parts & protocols for possible attack</ListItem>
              <ListItem>generates an alarm when an analomy is found</ListItem>
              <ListItem>generally doesn't work on grids</ListItem>
              <ListItem>eg) false alarms caused by most grid apps</ListItem>
            </List>
          </Slide>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} Fit cap lineHeight={1.5} textColor="secondary">
              Cryptography
            </Heading>
            <List textColor="white">
              <ListItem>symmetric and asymmetric cryptography</ListItem>
              <ListItem>used for auth & communication</ListItem>
              <ListItem>users, resources and applications need to be authenticated</ListItem>
              <ListItem>algorithms used - DES - RSA</ListItem>
            </List>
          </Slide>
          <Slide>
            <Heading size={1} Fit cap lineHeight={1.5} textColor="secondary">
              VPNs and FIREWALLS
            </Heading>
            <Text>VPNs used in Grid Secuirty at transport layer</Text>
            <List textColor="white">
              <ListItem>Confidentiality and Integrity</ListItem>
            </List>
          </Slide>
          <Slide>
            <Heading size={1} Fit cap lineHeight={1.5} textColor="secondary">
              Security Issues
            </Heading>
            <List textColor="white">
              <ListItem>Architecture</ListItem>
              <ListItem>Infrastructure</ListItem>
              <ListItem>Management</ListItem>
            </List>
          </Slide>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} Fit cap lineHeight={1.5} textColor="secondary">
              Conclusion
            </Heading>
            <List textColor="white">
              <ListItem>Some issues need to be addressed differently</ListItem>
              <ListItem>Need to be prepared to tackle all kinds of threats</ListItem>
              <Image imgSrc="https://www.utilitydive.com/user_media/cache/66/3e/663e14947a0271066722ff0baa25ca0f.jpg"></Image>
            </List>
          </Slide>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} Fit cap lineHeight={1.5} textColor="secondary">
              Current Events:
            </Heading>
            <List textColor="white">
              <ListItem>2016: Hackers cracked Ukranian grid control center defenses and shut down 60 substations responsible for delivering 200 megwatts of power to the nation's capital, kiev.</ListItem>
              <ListItem>Israel's Irondome Software Developer targets US Utility Clients</ListItem>
              <Image imgSrc="https://www.utilitydive.com/user_media/cache/66/3e/663e14947a0271066722ff0baa25ca0f.jpg"></Image>
            </List>
          </Slide>
          <Slide bgImage={images.anon} transition={["zoom"]} bgColor="primary">
          </Slide>
          <Slide bgImage={images.block} transition={["zoom"]} bgColor="primary">
          </Slide>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} Fit cap lineHeight={1.5} textColor="secondary">
              gitHub
            </Heading>
            <Text lineHeight={2} textColor="white">
              <Layout>Codes:</Layout>
              https://github.com/F1nalFortune/Grid_Security_Spec
            </Text>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
