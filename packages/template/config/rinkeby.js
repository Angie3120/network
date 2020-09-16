const { utf8ToHex } = require('web3-utils')
const { bn, bigExp } = require('@aragon/contract-helpers-test')

const MINUTE = 60

module.exports = {
  template:                 '0xe611F8D0919408A5C3d3b10e46C2dc09F134cfdf',
  token:                    '0x245B220211b7D3C6dCB001Aa2C3bf48ac4CaA03E',                       // ANT mock token used in Aragon Court staging
  agreement: {
    title:                  'Aragon Network Agreement',
    content:                utf8ToHex('ipfs:QmdaYTJk6aV2pmVRx9EdV8kdDxD9yGFktd6hFskXSr4KDE'),   // AN DAO agreement proposal
    arbitrator:             '0x52180af656a1923024d1accf1d827ab85ce48878',                       // Aragon Court staging instance
    stakingFactory:         '0x6a30c2de7359dB110b6322B41038674AE1D276Fb',                       // Staking factory instance on Rinkeby v0.3.1
  },
  disputableVoting1: {
    duration:               20 * MINUTE,
    support:                bn('6'.repeat(18)),                                                 // 66.666...%
    minQuorum:              bigExp(1, 14),                                                      // 0.01 %
    executionDelay:         MINUTE * 5,
    delegatedVotingPeriod:  MINUTE * 10,
    quietEndingPeriod:      MINUTE * 10,
    quietEndingExtension:   MINUTE * 5,
    actionCollateral:       bigExp(5, 18),                                                      // 5 DAI
    challengeCollateral:    bigExp(10, 18),                                                     // 10 DAI
    challengeDuration:      MINUTE * 5,
    collateralToken:        '0x245B220211b7D3C6dCB001Aa2C3bf48ac4CaA03E',                       // ANT mock token used in Aragon Court staging
  },
  disputableVoting2: {
    duration:               30 * MINUTE,
    support:                bn('6'.repeat(18)),                                                 // 66.666...%
    minQuorum:              bigExp(1, 14),                                                      // 0.01 %
    executionDelay:         MINUTE * 5,
    delegatedVotingPeriod:  MINUTE * 10,
    quietEndingPeriod:      MINUTE * 10,
    quietEndingExtension:   MINUTE * 5,
    actionCollateral:       bigExp(50, 18),                                                     // 50 DAI
    challengeCollateral:    bigExp(100, 18),                                                    // 100 DAI
    challengeDuration:      MINUTE * 5,
    collateralToken:        '0x245B220211b7D3C6dCB001Aa2C3bf48ac4CaA03E',                       // ANT mock token used in Aragon Court staging
  },
}