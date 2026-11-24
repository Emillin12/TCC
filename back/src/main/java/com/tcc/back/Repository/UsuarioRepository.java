import com.tcc.back.Model.Enum.Usuario;
import com.tcc.back.Model.Enum.Turno;

@Repository
public class UsuarioRepository {
    // JdbcTemplate: manda o SQL para o Postgres (configurado no application.properties)
    private final JdbcTemplate jdbc;

    public UsuarioRepository(JdbcTemplate jdbc) {
        this.jdbc = jdbc;
    }
    public class Usuario {

        private int id;
        private String nome;
        private String masp;
        private String cpf;
        private String emailInstitucional;
        private Turno turno;
        private String senha;


        public Usuario(int id, String nome, String masp, String cpf, String emailInstitucional, Turno turno, String senha) {
            this.id = id;
            this.nome = nome;
            this.masp = masp;
            this.cpf = cpf;
            this.emailInstitucional = emailInstitucional;
            this.turno = turno;
            this.senha = senha;
        }

        public int getId() {
            return id;
        }

        public String getNome() {
            return nome;
        }

        public String getMasp() {
            return masp;
        }

        public String getCpf() {
            return cpf;
        }

        public String getEmailInstitucional() {
            return emailInstitucional;
        }

        public Turno getTurno() {
            return turno;
        }

        public String getSenha() {
            return senha;
        }

        public List<Usuario> getLista() {
            return jdbc.query(
                    "SELECT id, nome, masp, cpf, email, turno, senha FROM usuario ORDER BY id",
                    (linha, numero) -> new Usuario(
                            linha.getInt("id"),
                            linha.getString("nome"),
                            linha.getString("masp"),
                            linha.getString("cpf"),
                            linha.getString("email"),
                            Turno.valueOf(linha.getString("turno")),
                            linha.getString("senha")
                    )
            );
        }


        public String addUsuario(Usuario usuario) {
// os ? são trocados pelos valores na ordem (nunca concatene texto no SQL)
            jdbc.update(
                    "INSERT INTO usuario (id,nome,masp,cpf,email,turno,senha) VALUES (?,?,?,?,?,?,?)",
                    usuario.getId(), usuario.getNome(), usuario.getMasp(), usuario.getCpf(), usuario.getEmailInstitucional(), usuario.getTurno().name(), usuario.getSenha()
            );
            return "Deu certo!";
        }

        public String updateUsuario(String nome, Usuario usuarioAtualizado) {
// update devolve quantas linhas o SQL mudou
            int linhas = jdbc.update(
                    "UPDATE usuario SET id = ?, nome = ?, masp =?,cpf=?,email =? turno=?, senha=? WHERE LOWER(nome) = LOWER(?)",
                    usuarioAtualizado.getId(), usuarioAtualizado.getNome(), usuarioAtualizado.getMasp(), usuarioAtualizado.getEmailInstitucional(), usuarioAtualizado.getTurno().name(), usuarioAtualizado.getSenha(), nome
            );
            return linhas > 0 ? "Usuario atualizado com sucesso!" : "Usuario não encontrado.";
        }
    };