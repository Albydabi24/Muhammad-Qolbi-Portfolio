import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import React, { useRef } from "react"

function Dock({
    className,
    desktopClassName,
    mobileClassName,
    children,
    magnification = 60,
    distance = 140,
    direction = "middle",
    ...props
}) {
    const mousex = useMotionValue(Infinity);

    const renderChildren = () => {
        return React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
                return React.cloneElement(child, {
                    mouseX: mousex,
                    magnification: magnification,
                    distance: distance,
                });
            }
            return child;
        });
    };

    const { style, ...restProps } = props;

    return (
        <motion.div
            onMouseMove={(e) => mousex.set(e.pageX)}
            onMouseLeave={() => mousex.set(Infinity)}
            className={`mx-auto w-max h-max gap-2 rounded-2xl border p-2 flex flex-row items-end ${className}`}
            style={{
                alignItems: 'flex-end',
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'nowrap',
                ...style
            }} // Enforce alignment for dock effect
            {...restProps}
        >
            {renderChildren()}
        </motion.div>
    );
}

function DockIcon({
    width: baseWidth = 40,
    magnification = 60,
    distance = 140,
    mouseX,
    className,
    children,
    ...props
}) {
    const ref = useRef(null);
    const distanceCalc = useTransform(mouseX, (val) => {
        const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
        return val - bounds.x - bounds.width / 2;
    });

    // Calculate width based on distance: from baseWidth -> magnification -> baseWidth
    let widthSync = useTransform(distanceCalc, [-distance, 0, distance], [baseWidth, magnification, baseWidth]);

    let width = useSpring(widthSync, {
        mass: 0.1,
        stiffness: 150,
        damping: 12,
    });

    return (
        <motion.div
            ref={ref}
            style={{ width }}
            className={`cursor-pointer flex items-center justify-center overflow-hidden ${className}`}
            {...props}
        >
            {children}
        </motion.div>
    );
}

export { Dock, DockIcon };
