import Heading from "../components/user/Heading";
import Transaction from "../components/user/Transaction";

function ProfilePage() {
  return (
    <>
      <main className="main bg-dark">
        <div className="header">
          <Heading title="Welcome back" username="Tony Jarvis" />
        </div>
        <h2 className="sr-only">Accounts</h2>
        <Transaction
          transaction={{
            title: "Argent Bank Checking (x8349)",
            amount: "$2,082.79",
            description: "Available Balance",
          }}
        />
        <Transaction
          transaction={{
            title: "Argent Bank Savings (x6712)",
            amount: "$10,928.42",
            description: "Available Balance",
          }}
        />
        <Transaction
          transaction={{
            title: "Argent Bank Credit Card (x8349)",
            amount: "$184.30",
            description: "Current Balance",
          }}
        />
      </main>
    </>
  );
}
export default ProfilePage;
