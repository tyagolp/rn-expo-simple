import classNames from 'classnames';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

type FilterStyleProps = {
    isActive?: boolean;
  }

type Props = TouchableOpacityProps & FilterStyleProps & {
  title: string;
}

export function Filter({ title, isActive = false, ...rest }: Props) {
  return (
    <TouchableOpacity 
        className={classNames('rounded h-9 w-[70px] items-center justify-center', isActive && 'border border-emerald-400')} 
        {...rest}
    >
      <Text className='uppercase text-base text-white'>
        {title}
      </Text>
    </TouchableOpacity>
  );
}