import { Box, UL, LI } from 'styled-system-html';
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
import Section from '../components/Section'
import Heading from '../components/Heading'
import Para from '../components/Para'
import Link from '../components/Link'

export default (props) => (
	<Box>
		<SiteHeader />
		<Box p={[4,5]} mw="960px" mx="auto">
			<Section>
				<Para>Styled Starter is built on top of <Link href="http://jxnblk.com/styled-system/">Styled System</Link> and <Link href="https://github.com/zeit/next.js">Next.js</Link>, using <Link href="https://www.catalog.style/">Catalog</Link> for the design system styleguide.</Para>
			</Section>
			<Section>
				<Heading>Styled Components / Styled System</Heading>
				<Para><Link href="https://www.styled-components.com/">Styled Components</Link> is a library for writing CSS directly in components. <Link href="https://github.com/jxnblk/styled-system">Styled System</Link> is a utility that hooks style props from a design theme into components. Use them together to inject components with a design system.</Para>
				<Para>As you build components, keep them documented in the <Link href="./design">styleguide</Link>, powered by <Link href="https://www.catalog.style/">Catalog</Link>.</Para>
			</Section>
			<Section>
				<Heading>Next.js</Heading>
				<Para><Link href="https://github.com/zeit/next.js">Next.js</Link> is a minimalistic framework for server-rendered React applications. Using Next.js allows us to have the developer experience of a Single Page App while delivering the performance gains of Server Side Rendering.</Para>
				<Para>Read more about it:</Para>
				<UL>
					<LI><Link href="https://medium.com/walmartlabs/the-benefits-of-server-side-rendering-over-client-side-rendering-5d07ff2cefe8">The Benefits of Server Side Rendering Over Client Side Rendering</Link></LI>
					<LI><Link href="https://www.codementor.io/tgreco/5-of-the-many-things-to-love-about-zeit-s-next-js-bpszu99g1">5 (of the many reasons) to love Next.js</Link></LI>
					<LI><Link href="https://hackernoon.com/next-js-react-server-side-rendering-done-right-f9700078a3b6">Next.js — React Server Side Rendering Done Right</Link></LI>
				</UL>
			</Section>
		</Box>
		<SiteFooter />
	</Box>
)
