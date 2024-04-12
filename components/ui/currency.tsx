"use client";

import { cn, formatter } from "@/lib/utils";
import React, { useEffect, useState } from "react";

interface CurrencyProps {
    value?: string | number;
    className?: string;
}

const Currency = ({ value, className }: CurrencyProps) => {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);
    if (!isMounted) return null;

    const numericValue: number = value ? parseFloat(value.toString()) : 0;

    return (
        <p className={cn("font-semibold", className)}>
            {formatter.format(numericValue)}
        </p>
    );
};

export default Currency;
