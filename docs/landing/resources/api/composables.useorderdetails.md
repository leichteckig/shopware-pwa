<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@shopware-pwa/composables](./composables.md) &gt; [useOrderDetails](./composables.useorderdetails.md)

## useOrderDetails() function

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.
> 

Composable for managing an existing order.

<b>Signature:</b>

```typescript
export declare function useOrderDetails(params: {
    order: Ref<Order> | Order;
}): {
    order: ComputedRef<Order | undefined | null>;
    status: ComputedRef<string | undefined>;
    total: ComputedRef<number | undefined>;
    subtotal: ComputedRef<number | undefined>;
    shippingCosts: ComputedRef<number | undefined>;
    shippingAddress: ComputedRef<ShippingAddress | undefined>;
    billingAddress: ComputedRef<BillingAddress | undefined>;
    personalDetails: ComputedRef<{
        email: string | undefined;
        firstName: string | undefined;
        lastName: string | undefined;
    }>;
    paymentUrl: Ref<null | string>;
    shippingMethod: ComputedRef<ShippingMethod | undefined | null>;
    paymentMethod: ComputedRef<PaymentMethod | undefined | null>;
    errors: UnwrapRef<{
        [key: string]: ShopwareError[];
    }>;
    loaders: UnwrapRef<{
        [key: string]: boolean;
    }>;
    loadOrderDetails: () => void;
    handlePayment: (successUrl?: string, errorUrl?: string) => void;
    cancel: () => Promise<void>;
    changePaymentMethod: (paymentMethodId: string) => Promise<void>;
};
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  params | { order: Ref&lt;Order&gt; \| Order; } |  |

<b>Returns:</b>

{ order: ComputedRef&lt;Order \| undefined \| null&gt;; status: ComputedRef&lt;string \| undefined&gt;; total: ComputedRef&lt;number \| undefined&gt;; subtotal: ComputedRef&lt;number \| undefined&gt;; shippingCosts: ComputedRef&lt;number \| undefined&gt;; shippingAddress: ComputedRef&lt;ShippingAddress \| undefined&gt;; billingAddress: ComputedRef&lt;BillingAddress \| undefined&gt;; personalDetails: ComputedRef&lt;{ email: string \| undefined; firstName: string \| undefined; lastName: string \| undefined; }&gt;; paymentUrl: Ref&lt;null \| string&gt;; shippingMethod: ComputedRef&lt;ShippingMethod \| undefined \| null&gt;; paymentMethod: ComputedRef&lt;PaymentMethod \| undefined \| null&gt;; errors: UnwrapRef&lt;{ \[key: string\]: ShopwareError\[\]; }&gt;; loaders: UnwrapRef&lt;{ \[key: string\]: boolean; }&gt;; loadOrderDetails: () =&gt; void; handlePayment: (successUrl?: string, errorUrl?: string) =&gt; void; cancel: () =&gt; Promise&lt;void&gt;; changePaymentMethod: (paymentMethodId: string) =&gt; Promise&lt;void&gt;; }
