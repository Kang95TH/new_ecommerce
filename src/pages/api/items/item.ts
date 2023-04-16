import type { NextApiRequest, NextApiResponse } from "next";
import { tb_item } from '@prisma/client';
import prisma from 'pages/lib/prisma'
import ProductType from 'types/product-type';
import ProductsType from 'types/products-type';

function convertToString(str: string | string[] | undefined): string {
    if (str === undefined) {
        return '';
    } else if (typeof str === 'string') {
        return str;
    } else if (Array.isArray(str)) {
        return str.join(', ');
    }

    throw new Error(`Invalid string: ${str}`);
}

// export async function getProductsItemByCategory(category: string | string[] | undefined): Promise<{ id: number, product: string, category: string, price: number, freeShipping: boolean, src: string }[]> {
export async function getProductsItemByCategory(category: string | string[] | undefined): Promise<ProductType[]> {
    const convertCategory = convertToString(category);
    const items: tb_item[] = await prisma.tb_item.findMany({
        where: {
            category: convertCategory,
        },
    });
    return items.map((item) => ({
        id: item.id,
        product: item.product!,
        category: item.category!,
        price: item.price!,
        freeShipping: item.freeshipping ? true : false,
        src: item.src!,
    }));

}

export async function getParseProductType(): Promise<ProductType[]> {
    const items: tb_item[] = await prisma.tb_item.findMany()
    return items.map((item) => ({
        id: item.id,
        product: item.product!,
        category: item.category!,
        price: item.price!,
        freeShipping: item.freeshipping ? true : false,
        src: item.src!,
    }));
}

export async function getParseProductsType(): Promise<ProductsType> {
    const items: tb_item[] = await prisma.tb_item.findMany()
    const parseItems = items.map((item) => ({
        id: item.id,
        product: item.product!,
        category: item.category!,
        price: item.price!,
        freeShipping: item.freeshipping ? true : false,
        src: item.src!,
    }));
    return { products: parseItems };
}

export async function getProductsItem(): Promise<ProductsType> {
    return getParseProductsType();
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const items = await prisma.tb_item.findMany()
    res.status(200).json(items)
}