function totalAmount (user) {
    console.log('user:',user)
    return user.aPVAmount + user.account2Amount + user.mandatoryRetirementFundAmount 
}
export default totalAmount