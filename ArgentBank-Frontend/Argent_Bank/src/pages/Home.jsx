import Hero from "../components/index/Hero";
import Card from "../components/index/Card";
import chatIcon from "../assets/img/icon-chat.png";
import moneyIcon from "../assets/img/icon-money.png";
import securityIcon from "../assets/img/icon-security.png";

function HomePage() {
  return (
    <main>
      <Hero
        title="Promoted Content"
        subtitle1="No fees."
        subtitle2="No minimum deposit."
        subtitle3="High interest rates."
        text="Open a savings account with Argent Bank today!"
      />
      <section className="features">
        <h2 className="sr-only">Features</h2>
        <Card
          img={chatIcon}
          title="You are our #1 priority"
          content="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
        />
        <Card
          img={moneyIcon}
          title="More savings means higher rates"
          content="The more you save with us, the higher your interest rate will be!"
        />
        <Card
          img={securityIcon}
          title="Security you can trust"
          content="We use top of the line encryption to make sure your data and money is always safe."
        />
      </section>
    </main>
  );
}
export default HomePage;
