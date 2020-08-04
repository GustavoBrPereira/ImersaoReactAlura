import React, { useState, useEffect } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link, useHistory } from 'react-router-dom';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriaRepository from '../../../repositories/categorias';


function CadastroVideo() {
    const history = useHistory();
    const [categorias, setCategorias] = useState([]);
    const categoryTitles = categorias.map(({ titulo }) => titulo )
    const { handleChange, values } = useForm({
        titulo:'',
        url: '',
        categoria: '',
    });

    useEffect(() => {
        categoriaRepository
            .getAll()
            .then((categorias) => {
                setCategorias(categorias);
                console.log(categorias);            })
    }, [])

    return(
        <PageDefault>
            <h1>Cadastro de vídeo</h1> 

            <form onSubmit={(event) => {
                event.preventDefault();

                const categoriaEscolhida = categorias.find((categoria) => {
                    return categoria.titulo === values.categoria;
                })

                console.log('Escolha: ',categoriaEscolhida);

                videosRepository.create({
                    titulo: values.titulo,
                    url: values.url,
                    categoriaId: categoriaEscolhida.id,
                }).then(() => {
                    history.push('/');
                });

            }}>

            <FormField
                label="Titulo do video"
                name="titulo"
                value={values.titulo}
                onChange={handleChange}
            />

            <FormField
                label="URL"
                name="url"
                value={values.url}
                onChange={handleChange}
            />

            <FormField
                label="Categoria"
                name="categoria"
                value={values.categoria}
                onChange={handleChange}
                suggestions={categoryTitles}    
            />

        <Button type="submit" style={{backgroundColor: 'transparent'}}>
          Cadastrar
        </Button>

            </form>


            <Link to="/cadastro/categoria">
                Cadastrar Categoria
            </Link>
        </PageDefault>
        
    );
}

export default CadastroVideo;