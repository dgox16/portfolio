export const Footer = () => {
    return (
        <div className="bg-crust flex justify-center">
            <div className=" w-recommend text-center">
                <p className="py-3 text-text text-sm xs:text-[16px]">
                    © 2024 Diego Armando Gómez Martínez.{" "}
                    <span className="hidden sm:inline"> | </span>
                    <br aria-hidden={true} className="block sm:hidden" /> Casi todos los derechos
                    reservados
                </p>
            </div>
        </div>
    );
};
