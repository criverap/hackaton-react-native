function isAnyAPVAmount(user){
    return user.aPVAmount ? user.aPVAmount : 0
}

function isAnyAccount2Amount(user){
    return user.account2Amount ? user.account2Amount : 0
}

function isAnymandatoryRetirementFundAmount(user){
    return user.mandatoryRetirementFundAmount ? user.mandatoryRetirementFundAmount : 0
}

function totalAmount (user) {
    return isAnyAPVAmount(user) + isAnyAccount2Amount(user) + isAnymandatoryRetirementFundAmount(user)
}

export default totalAmount