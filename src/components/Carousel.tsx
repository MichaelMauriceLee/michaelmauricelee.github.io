import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import classNames from 'classnames';
import {
  Children,
  cloneElement,
  ReactElement,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';

type Props = {
  className?: string;
  children: ReactElement;
};

const Carousel = ({ children, className }: Props) => {
  const isDeviceMobile =
    typeof window !== 'undefined' &&
    navigator.userAgent.indexOf('IEMobile') !== -1;
  const carouselContainer = useRef<HTMLDivElement>(null);
  const [activeItem, setActiveItem] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const items = useMemo(
    () =>
      Children.map(
        children as unknown as ReactElement[],
        (child: ReactElement) =>
          cloneElement(child, {
            className: classNames(),
          })
      ),
    [children]
  );

  const navigateTo = useCallback(
    (item: number) => () => {
      if (!items) return;
      item = (item + items.length) % items.length;
      if (carouselContainer.current) {
        carouselContainer.current.scrollLeft =
          carouselContainer.current.clientWidth * item;
      }
      setActiveItem(item);
    },
    [items]
  );

  useEffect(() => {
    if (
      carouselContainer.current &&
      !isDragging &&
      carouselContainer.current.scrollLeft !== 0
    ) {
      setActiveItem(
        Math.round(
          carouselContainer.current.scrollLeft /
            carouselContainer.current.clientWidth
        )
      );
    }
  }, [isDragging]);

  useEffect(() => {
    const intervalId = setInterval(
      () => !isDragging && navigateTo(activeItem + 1)(),
      3000
    );

    return () => clearInterval(intervalId);
  }, [activeItem, isDragging, navigateTo]);

  const handleDragging = (dragging: boolean) => () => setIsDragging(dragging);

  return (
    <div className={classNames('', className)}>
      <ScrollContainer
        className={classNames('', (isDeviceMobile || !isDragging) && '')}
        draggingClassName="cursor-grab"
        innerRef={carouselContainer}
        onEndScroll={handleDragging(false)}
        onStartScroll={handleDragging(true)}
        vertical={false}
      >
        {items?.map((item, index) => (
          <div
            key={index}
            className=""
            data-active={activeItem === index}
            data-testid="carousel-item"
          >
            {item}
          </div>
        ))}
      </ScrollContainer>

      <div className="">
        {items?.map((_, index) => (
          <button
            key={index}
            className={classNames()
            //   theme.indicators.base,
            //   theme.indicators.active[index === activeItem ? 'on' : 'off']
            }
            onClick={navigateTo(index)}
            data-testid="carousel-indicator"
          />
        ))}
      </div>

      {items && (
        <>
          <div className="">
            <button
              className="group"
              aria-label="carousel-left-control"
              onClick={navigateTo(activeItem - 1)}
              type="button"
            >
              <LeftOutlined />
            </button>
          </div>

          <div className="">
            <button
              className="group"
              aria-label="carousel-right-control"
              onClick={navigateTo(activeItem + 1)}
              type="button"
            >
              <RightOutlined />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Carousel;
