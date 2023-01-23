import React, { PureComponent } from 'react'
import styled from '@emotion/styled'

const Heading = styled('h4')`
  margin: 16px 0;
  cursor: pointer;
  display: flex;
  font-weight: bold;
`

const DownChevron = styled('img')`
  margin-left: 1rem;
  width: 11px;
  height: 6px;
`

const UpChevron = styled('img')`
  margin-left: 1rem;
  width: 11px;
  height: 6px;
  transform: rotate(180deg);
`

const Anchor = styled('a')`
  color: #0835db !important;
  text-decoration: underline !important;
`

const AnchorBold = styled('a')`
  color: #0835db !important;
  text-decoration: underline !important;
  font-weight: bold !important;
  margin-left: 5px;
`

interface DoNotSellProps {
  open?: boolean | null
}

class DoNotSellText extends PureComponent {
  static displayname = 'DoNotSellText'

  render() {
    return (
      <div>
        <p>
          While we do not sell personal information to third parties for money, we, like many
          companies, use services that help deliver interest-based ads to you as described in our
          <AnchorBold href="https://help.tcgplayer.com/hc/en-us/articles/201237007-Privacy-Statement-for-TCGplayer">
            Privacy Policy
          </AnchorBold>
          . Some privacy laws, including the California Consumer Privacy Act (CCPA), classify our
          use of these services as the "sale" or "sharing" of your personal information with the
          partners that provide these advertising services to us (i.e., our "advertising partners"),
          and these laws may provide you with the right to opt-out of such "sale" or "sharing".
        </p>
        <p>
          You may opt-out of our "sale" or "sharing" of your personal information with these
          advertising partners by toggling the "Advertising" cookie category to "No", below.
        </p>
        <p>
          You may also choose to utilize the Global Privacy Control (GPC) signal from your browser
          to automatically opt-out of our "sale" or "sharing" of your personal information from or
          for that particular browser with our advertising partners. You can learn more about GPC by
          visiting the{' '}
          <Anchor href="http://globalprivacycontrol.org/">Global Privacy Control</Anchor> website.
        </p>
        <p>
          Please note that, because both of the elections above are browser-specific, your request
          to opt-out in each instance will only apply to the browser and the device from which you
          submit the request, and you will need to repeat this process on each device and browser
          that you use.
        </p>
        <p>
          You may learn more about the cookies we use by visiting our
          <AnchorBold href="https://help.tcgplayer.com/hc/en-us/articles/9709672995095-Cookies-and-Similar-Technologies-Policy">
            Cookies Policy
          </AnchorBold>
          .
        </p>
      </div>
    )
  }
}

export default class DoNotSell extends PureComponent<DoNotSellProps, { isOpen: boolean }> {
  static displayName = 'DoNotSell'

  static defaultProps = {
    open: null
  }

  constructor(props: any) {
    super(props)

    const { innerWidth: width } = window

    this.state = {
      isOpen: props.open === null ? width > 600 : props.open
    }
  }

  render() {
    const onClick = () => {
      this.setState({ isOpen: !this.state.isOpen })
    }

    return (
      <div>
        <Heading onClick={onClick}>
          <div>Notice of Right to Opt-Out of Sale/Sharing</div>
          <div>
            {this.state.isOpen ? (
              <UpChevron src="https://mktg-assets.tcgplayer.com/web/svg-embeds/icons/chevron-down.svg" />
            ) : (
              <DownChevron src="https://mktg-assets.tcgplayer.com/web/svg-embeds/icons/chevron-down.svg" />
            )}
          </div>
        </Heading>
        {this.state.isOpen && <DoNotSellText />}
      </div>
    )
  }
}
