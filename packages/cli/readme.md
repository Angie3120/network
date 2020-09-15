## AN DAO CLI

### Install

First, clone this repo:
```bash
git clone git@github.com:aragon/network.git aragon-network
cd aragon-network
```

Then install the CLI dependencies:
```bash
git checkout an_dao_cli
git pull origin an_dao_cli
cd ./packages/cli
yarn
```

Cool! We are ready to start playing with this!

### Commands

To see the whole list of commands simply type:
```bash
yarn run help
```

You should see an output including the following list of tasks at least:
```bash
sign            	Sign the latest AN DAO agreement version
create-poll     	Submit a poll to the AN DAO
create-transfer 	Submit a token transfer to the AN DAO
challenge       	Challenge an AN DAO proposal
dispute         	Dispute an AN DAO proposal to Aragon Court
settle          	Settle a challenged AN DAO proposal
vote            	Vote on an AN DAO proposal
delegate-vote   	Delegate vote on an AN DAO proposal
execute-proposal	Execute an AN DAO proposal
close-proposal  	Close an AN DAO proposal
help            	Prints this message
```

To read more information about these tasks simply run:
```bash
yarn [task] --help
```

You should see an output similar to this:
```bash
Usage: buidler [GLOBAL OPTIONS] vote --from <STRING> --proposal <STRING> --supports <STRING>

OPTIONS:

  --from    	Address submitting the vote
  --proposal	Proposal number to vote on
  --supports	Whether you support the proposal

vote: Vote on an AN DAO proposal
```

Which basically tells you that the task `vote` expects those three parameters.


### Testing

⚠️ Important! Note that this tool is only set up to work with Rinkeby orgs for now.

To use this commands against a DAO simply tweak the config variables located in `andao.config.js`.

To be able to sign transaction using the commands listed above, make sure you have set the `ETH_KEYS` variable with the csv-list of PKs you want to use.