const { bn, bigExp } = require('@aragon/contract-helpers-test')

const DAI = '0x3af6b2f907f0c55f279e0ed65751984e6cdc4a42'  // Fake DAI used for Staging instance

module.exports = {
  rinkeby: {
    feeToken:                      DAI,                   // fee token for the court is DAI
    evidenceTerms:                 bn(21),                // evidence period lasts 21 terms (7 days)
    commitTerms:                   bn(6),                 // vote commits last 6 terms (2 days)
    revealTerms:                   bn(6),                 // vote reveals last 6 terms (2 days)
    appealTerms:                   bn(6),                 // appeals last 6 terms (2 days)
    appealConfirmTerms:            bn(6),                 // appeal confirmations last 6 terms (2 days)
    maxJurorsPerDraftBatch:        bn(81),                // max number of jurors drafted per batch
    jurorFee:                      bigExp(40, 18),        // 40 fee tokens for juror fees
    draftFee:                      bigExp(6, 18),         // 6 fee tokens for draft fees
    settleFee:                     bigExp(4, 18),         // 4 fee tokens for settle fees
    penaltyPct:                    bn(1000),              // 10% of the min active balance will be locked to each drafted juror
    finalRoundReduction:           bn(5000),              // 50% of discount for final rounds
    firstRoundJurorsNumber:        bn(3),                 // disputes will start with 3 jurors
    appealStepFactor:              bn(3),                 // the number of jurors to be drafted will be incremented 3 times on each appeal
    maxRegularAppealRounds:        bn(4),                 // there can be up to 4 appeals in total per dispute
    finalRoundLockTerms:           bn(21),                // coherent jurors in the final round won't be able to withdraw for 21 terms (7 days)
    appealCollateralFactor:        bn(30000),             // appeal collateral is 3x of the corresponding juror fees
    appealConfirmCollateralFactor: bn(20000),             // appeal-confirmation collateral is 2x of the corresponding juror fees
    finalRoundWeightPrecision:     bn(1000),              // use to improve division rounding for final round maths
    minActiveBalance:              bigExp(100, 18)        // 100 ANJ is the minimum balance jurors must activate to participate in the Court
  }
}