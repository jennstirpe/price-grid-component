import { StyledSubscription } from "./styled/Subscription.styled"

const Subscription = () => {
  return (
    <StyledSubscription>
      <h3 class="subscription-type">Monthly Subscription</h3>
      <p class="pricing"><span class="price">&#36;29</span> per month</p>
      <p class="subscription-desc">Full access for less than &#36;1 a day</p>
      <a href="#" target="_blank" id="signup">Sign Up</a>
   </StyledSubscription>
  )
}

export default Subscription