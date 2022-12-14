const IPFSInbox = artifacts.require("../contract/Inbox");

contract("IPFSInbox",accounts =>{
    it("emit event when you send a ipfs address", async()=>{
        // ait for the contract
        const ipfsInbox = await IPFSInbox.deployed()

        // set a variable to false and f=get event listner
        eventEmitted  = false
        // var event = ()
        await ipfsInbox.ipfsSent((err,res)=>{
            eventEmitted= true
        })

        // call the contract function which sends the ipfs address
        await ipfsInbox.sendIPFS(accounts[1],"sampleAddress",{
            from:accounts[0]
        })
        assert.equal(eventEmitted, true, "sending an IPFS request does not emit an event")
    })
})