import { Trans } from "@lingui/macro";

export const QNAS = [
  {
    question: (
      <Trans id="Why has CONUN developed its own private blockchain network? " />
    ),
    answer: (
      <Trans
        id="CONUN’s main project, the DSC, allows users to submit supercomputing tasks, that will be shared with connected nodes, users who are sharing their computers’ resources with the network. When tasks are completed, users are rewarded for their computers’ work with tokens. For the rewarding process to work, transferring tokens must be both free, as well as fast. With a private blockchain network, CONUN is able to meet both of these requirements. 

You can read more about this on the DSC and CPBN product description pages! "
      />
    ),
  },
  {
    question: <Trans id="How much are fees when using CON and CONX tokens? " />,
    answer: (
      <Trans
        id="CON tokens are CONUN’s ERC20 tokens on the Ethereum network, and so CON transfers incur the usual transaction fees for sending ERC20 tokens. These fees are deducted from your wallet’s Eth balance. 

CONX tokens exist only on CONUN’s private blockchain network. Transfers of CONX to other users incur no fees at all. 

When swapping CON to CONX or CONX to CON, the bridge swap process involves smart contracts both inside the CONUN network, and on the Ethereum network. Any action involving a smart contract on the Ethereum network incurs the usual transaction fees. These fees are deducted from your wallet’s Eth balance. "
      />
    ),
  },
  {
    question: (
      <Trans id="Can I add other token wallets into my Metacon wallet? " />
    ),
    answer: (
      <Trans
        id="The Metacon wallet allows you to keep wallets for different tokens together, and access them using a JSON certificate. 

The current version of Metacon only allows you to keep ETH, CON, and CONX wallets inside the certificate. Later versions will allow you to add more wallets. Look out for Metacon news over on the News page! "
      />
    ),
  },
];
