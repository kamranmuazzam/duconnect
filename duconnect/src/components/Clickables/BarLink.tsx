import { JSX } from 'solid-js';

interface BarLinkProps {
    name: string;
}

const BarLink = (props: BarLinkProps): JSX.Element => {
    const { name } = props;
    return (
        <a href="#">{name}</a>
    );
};

export default BarLink;
