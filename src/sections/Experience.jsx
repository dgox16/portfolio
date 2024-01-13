export const Experience = () => {
    return (
        <div className="flex justify-center">
            <div class="md:w-2/3">
                <h1 class="font-bold italic mb-10">PROYECTOS</h1>

                <div class="relative mt-5 text-left">
                    <div class="flex items-center relative">
                        <div class="hidden md:block w-20">
                            <div class="font-bold italic">2020</div>
                            <div class="md:flex space-x-1 text-xs">
                                <div>Abr.</div>
                                <div>-</div>
                                <div>Jun.</div>
                            </div>
                        </div>

                        <div class="border-r-2 border-black absolute h-full left-1 md:left-20 top-2 z-10">
                            <i class="fas fa-circle -top-1 -ml-2 absolute"></i>
                        </div>

                        <div class="ml-10">
                            <div class="font-bold">Proyecto 1</div>
                            <div class="italic md:mb-4">Empresa 1</div>
                            <div class="mb-4 mt-2 md:hidden">
                                <div class="font-bold">2020</div>
                                <div class="text-xs">Abril - Junio</div>
                            </div>
                            <div class="mb-10">
                                Fusce auctor gravida dui, ut tristique nisi aliquam quis. Maecenas
                                id ligula ac dui mollis tempor. Sed vitae ex eros. Proin nisl felis,
                                consectetur sed elit sed, vestibulum ultrices nibh.
                            </div>
                        </div>
                    </div>

                    <div class="flex items-center relative">
                        <div class="hidden md:block w-20">
                            <div class="font-bold italic">2020</div>
                            <div class="md:flex space-x-1 text-xs">
                                <div>Jul.</div>
                                <div>-</div>
                                <div>Ago.</div>
                            </div>
                        </div>

                        <div class="border-r-2 border-black absolute h-full left-1 md:left-20 top-2 z-10">
                            <i class="fas fa-circle -top-1 -ml-2 absolute"></i>
                        </div>

                        <div class="ml-10">
                            <div class="font-bold">Proyecto 2</div>
                            <div class="italic md:mb-4">Empresa 2</div>
                            <div class="mb-4 mt-2 md:hidden">
                                <div class="font-bold">2020</div>
                                <div class="text-xs">Julio - Agosto</div>
                            </div>
                            <div class="mb-10">
                                Fusce auctor gravida dui, ut tristique nisi aliquam quis. Maecenas
                                id ligula ac dui mollis tempor. Sed vitae ex eros. Proin nisl felis,
                                consectetur sed elit sed, vestibulum ultrices nibh.
                            </div>
                        </div>
                    </div>

                    <div class="flex items-center relative">
                        <div class="hidden md:block w-20">
                            <div class="font-bold italic">2020</div>
                            <div class="md:flex space-x-1 text-xs">
                                <div>Ago.</div>
                                <div>-</div>
                                <div>Hoy.</div>
                            </div>
                        </div>

                        <div class="border-r-2 border-black absolute h-full left-1 md:left-20 top-2 z-10">
                            <i class="fas fa-circle -top-1 -ml-2 absolute"></i>
                            <i class="fas fa-circle bottom-0 -ml-2 absolute"></i>
                        </div>

                        <div class="ml-10">
                            <div class="font-bold">Proyecto 3</div>
                            <div class="italic md:mb-4">Empresa 3</div>
                            <div class="mb-4 mt-2 md:hidden">
                                <div class="font-bold">2020</div>
                                <div class="text-xs">Agosto - Hoy</div>
                            </div>
                            <div class="mb-10">
                                Fusce auctor gravida dui, ut tristique nisi aliquam quis. Maecenas
                                id ligula ac dui mollis tempor. Sed vitae ex eros. Proin nisl felis,
                                consectetur sed elit sed, vestibulum ultrices nibh.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
