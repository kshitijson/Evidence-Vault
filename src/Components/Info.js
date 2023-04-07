import React, { useEffect } from 'react'

export default function Info() {
    useEffect(() => {
        document.title = "EPB | Home";
    }, []);
  return (
    <>
    <div className="container info">
        <div className="row no-gutters info">
            <div className="col-md-5 infor">
                <img src={require("./assets/evidence.png")} alt="evidence" />
            </div>
            <div className="col-md-5 infor">
                <h2 className="text-center">EVIDENCE PROTECTION SYSTEM USING BLOCKCHAIN</h2>
                <div className="line-break">
                    <hr />
                </div>
                <p className="p-1">With the help of blockchain technology, our project uses secure, tamper-proof evidence storage. The evidence cannot be tampered with, and if it is, we can immediately spot it since the entire chain of evidence succeding the modified evidence becomes invalid.</p>
            </div>
        </div>
        <div className="row no-gutters info">
            <div className="col-md-5 infor">
                <h2 className="text-center">WHAT IS BLOCKCHAIN?</h2>
                <div className="line-break">
                    <hr />
                </div>
                <p className="p-1">Blockchain is a decentralised digital ledger that uses encryption to securely and openly record transactions. It enables peer-to-peer transactions without the need for middlemen like banks and offers an unalterable record of all network transactions.</p>
            </div>
            <div className="col-md-5 infor unik">
                <img className='on-chain' src={require("./assets/on_chain.png")} alt="blockchain" />
            </div>
        </div>
        <div className="row no-gutters info">
            <div className="col-md-5 infor">
                <img src={require("./assets/question.png")} alt="question" />
            </div>
            <div className="col-md-5 infor">
                <h2 className="text-center">WHY USE BLOCKCHAIN?</h2>
                <div className="line-break">
                    <hr />
                </div>
                <p className="p-1">Blockchain offers a tamper-proof and immutable record of all transactions and events, making it ideal for storing evidence. This makes it the perfect solution for safeguarding crucial records and evidence that must be checked and confirmed over time without the chance of tampering or corruption.</p>
            </div>
        </div>
    </div>
    </>
  )
}
