import React from "react"
import { Grid } from "@material-ui/core"
import Icon from "../../atoms/Icon/SocialIcon"

const Icons = () => {
  const IconsData = [
    {
      slug: "Facebook_Icon",
      imageUrl:
        "https://images.ctfassets.net/vwjmj23nubil/5JRs2uPSSK2xEJ7dnzxD9m/dab85225e9e907a4897cb30713b02b88/facebook.png",
      linkTo: "https://www.facebook.com",
    },
    {
      slug: "Twitter_Icon",
      imageUrl:
        "https://images.ctfassets.net/vwjmj23nubil/3iIhN5ulQdXagVItws7M6P/0774897a854d4a1e57d18da720831232/twiter.png",
      linkTo: "https://www.twitter.com",
    },
    {
      slug: "LinkedIn_Icon",
      imageUrl:
        "https://images.ctfassets.net/vwjmj23nubil/1hfJjShlYxuiG3C4Il04ip/85fca7779686a2a9f071797d346da9a6/linkedin.png",
      linkTo: "https://www.linkedin.com",
    },
  ]
  return (
    <Grid item xs={2} direction="row">
      {IconsData.map(data => (
        <Icon
          slug={data.slug}
          imageUrl={data.imageUrl}
          linkTo={data.linkTo}
        />
      ))}
    </Grid>
  )
}
export default Icons
