<script setup>
    import FooterComponent from '../../public/components/footer.component.vue';
    import NavbarComponent from '../../public/components/navbar.component.vue';
</script>

<template lang="">
    <NavbarComponent/>
    <main class="flex flex-col pt-24 min-h-[70dvh]">
        <h1 class="text-center text-5xl !font-semibold">Elige tu metodo de pago</h1>
        <div class="flex md:flex-row flex-col gap-32 justify-center items-center py-20">
            <Card :content="false" class='!bg-primary-500 overflow-hidden border-black border-4'>
                <template #header>
                    <img alt="card image" src='/images/card.png' class='w-4/6 border border-none rounded-lg mx-auto pt-3' />
                </template>
                <template #title>
                    <h1 class="text-center justify-center align-middle">
                      Tarjeta
                    </h1>
                </template>
            </Card>

            <Card :content="false" class='!bg-primary-500 overflow-hidden border-black border-4'>
                <template #header>
                    <img alt="card image" src='/images/others.png' class='w-4/6 border border-none rounded-lg mx-auto pt-3' />
                </template>
                <template #title>
                    <h1 class="text-center justify-center align-middle">
                      Otros
                    </h1>
                </template>
            </Card>

        </div>
    </main>
    <FooterComponent/>
</template>

<style lang="">
    
</style>