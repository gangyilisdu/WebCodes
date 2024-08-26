import sys
from PyQt5.QtWidgets import QApplication, QMainWindow, QWidget, QVBoxLayout, QTabWidget, \
    QComboBox, QLabel, QLineEdit, QPushButton, QGridLayout, QFrame, QStackedWidget, QTextEdit
from PyQt5.QtCore import Qt
from PyQt5.QtGui import QFont


class MyApp(QMainWindow):
    def __init__(self):
        super().__init__()
        self.init_ui()

    def init_ui(self):
        # 设置主窗口的标题
        self.setWindowTitle('查询与分析工具')

        # 设置主窗口的尺寸
        self.resize(800, 600)

        # 创建一个主容器来容纳所有内容
        main_widget = QWidget()
        self.setCentralWidget(main_widget)

        # 使用垂直布局管理器来组织不同的功能
        layout = QVBoxLayout(main_widget)

        # 创建标签页控制器
        tab_widget = QTabWidget()
        layout.addWidget(tab_widget)

        # 查询功能标签页
        query_tab = QWidget()
        query_layout = QVBoxLayout(query_tab)
        tab_widget.addTab(query_tab, "查询")

        # 创建一个下拉列表来选择查询类型
        query_type_selector = QComboBox()
        query_type_selector.addItem("查表")
        query_type_selector.addItem("查字段")
        query_type_selector.currentTextChanged.connect(self.on_query_type_changed)
        query_layout.addWidget(query_type_selector)

        # 创建一个 StackedWidget 来动态显示查询功能的内容
        self.query_content_stacked_widget = QStackedWidget()

        # 查询功能下的查表
        self.query_table_widget = QWidget()
        query_table_layout = QGridLayout()
        self.query_table_widget.setLayout(query_table_layout)

        # 将查表的标题放在更上方的位置
        query_table_label = QLabel("查表")
        query_table_label.setStyleSheet("font-size: 16px; font-weight: bold;")
        query_table_layout.addWidget(query_table_label, 0, 0, 1, 2)

        table_name_label = QLabel("Table Name:")
        config_name_label = QLabel("Config Name:")
        self.query_table_input1 = QLineEdit()
        self.query_table_input2 = QLineEdit()
        query_table_button = QPushButton("查询")
        query_table_button.setStyleSheet("height: 30px; padding: 5px; font-size: 14px;")
        query_table_button.clicked.connect(self.query_tab_1)

        # 设置输入框的样式
        self.query_table_input1.setStyleSheet("height: 30px; padding: 5px; font-size: 14px;")
        self.query_table_input2.setStyleSheet("height: 30px; padding: 5px; font-size: 14px;")

        # 查询结果区域
        self.query_table_result_text_edit = QTextEdit()
        self.query_table_result_text_edit.setReadOnly(True)
        self.query_table_result_text_edit.setStyleSheet(
            "border: 1px solid #ccc; padding: 5px; font-size: 16px;")  # 字体大小设置为 16px

        # 将查表组件添加到网格布局中
        query_table_layout.addWidget(table_name_label, 1, 0)
        query_table_layout.addWidget(self.query_table_input1, 1, 1)
        query_table_layout.addWidget(config_name_label, 2, 0)
        query_table_layout.addWidget(self.query_table_input2, 2, 1)
        query_table_layout.addWidget(query_table_button, 3, 0, 1, 2)
        query_table_layout.addWidget(self.query_table_result_text_edit, 4, 0, 1, 2)

        # 查询功能下的查字段
        self.query_field_widget = QWidget()
        query_field_layout = QGridLayout()
        self.query_field_widget.setLayout(query_field_layout)

        query_field_label = QLabel("查字段")
        query_field_label.setStyleSheet("font-size: 16px; font-weight: bold;")
        query_field_layout.addWidget(query_field_label, 0, 0, 1, 2)

        menu_dir_label = QLabel("MenuDir:")
        page_name_label = QLabel("PageName:")
        self.query_field_input1 = QLineEdit()
        self.query_field_input2 = QLineEdit()
        query_field_button = QPushButton("查询")
        query_field_button.setStyleSheet("height: 30px; padding: 5px; font-size: 14px;")
        query_field_button.clicked.connect(self.query_tab_2)

        # 设置输入框的样式
        self.query_field_input1.setStyleSheet("height: 30px; padding: 5px; font-size: 14px;")
        self.query_field_input2.setStyleSheet("height: 30px; padding: 5px; font-size: 14px;")

        # 查询结果区域
        self.query_field_result_text_edit = QTextEdit()
        self.query_field_result_text_edit.setReadOnly(True)
        self.query_field_result_text_edit.setStyleSheet(
            "border: 1px solid #ccc; padding: 5px; font-size: 16px;")  # 字体大小设置为 16px

        # 将查字段组件添加到网格布局中
        query_field_layout.addWidget(menu_dir_label, 1, 0)
        query_field_layout.addWidget(self.query_field_input1, 1, 1)
        query_field_layout.addWidget(page_name_label, 2, 0)
        query_field_layout.addWidget(self.query_field_input2, 2, 1)
        query_field_layout.addWidget(query_field_button, 3, 0, 1, 2)
        query_field_layout.addWidget(self.query_field_result_text_edit, 4, 0, 1, 2)

        # 添加到 StackedWidget 中
        self.query_content_stacked_widget.addWidget(self.query_table_widget)
        self.query_content_stacked_widget.addWidget(self.query_field_widget)

        # 添加到查询功能布局中
        query_layout.addWidget(self.query_content_stacked_widget)

        # 设置一些基本的间距和边距
        query_table_layout.setVerticalSpacing(10)
        query_table_layout.setHorizontalSpacing(10)
        query_table_layout.setContentsMargins(10, 10, 10, 10)

        query_field_layout.setVerticalSpacing(10)
        query_field_layout.setHorizontalSpacing(10)
        query_field_layout.setContentsMargins(10, 10, 10, 10)

        # 分析功能标签页
        analysis_tab = QWidget()
        analysis_layout = QVBoxLayout(analysis_tab)
        tab_widget.addTab(analysis_tab, "分析")

        # 分析功能下的分析CDR
        analysis_cdr_widget = QWidget()
        analysis_cdr_layout = QGridLayout(analysis_cdr_widget)  # 使用网格布局

        # 标题
        analysis_cdr_title = QLabel("分析CDR")
        analysis_cdr_title.setAlignment(Qt.AlignCenter)  # 居中显示
        analysis_cdr_title.setStyleSheet("font-size: 18px; font-weight: bold;")
        analysis_cdr_layout.addWidget(analysis_cdr_title, 0, 0, 1, 3)  # 放置在第0行，占据3列

        # 下拉框
        type_label = QLabel("Type:")
        type_label.setStyleSheet("font-size: 14px;")
        self.cdr_type_selector = QComboBox()
        self.cdr_type_selector.addItem("re")
        self.cdr_type_selector.addItem("vo")
        self.cdr_type_selector.setStyleSheet("width: 50px; height: 30px; padding: 5px; font-size: 14px;")
        analysis_cdr_layout.addWidget(type_label, 1, 0)
        analysis_cdr_layout.addWidget(self.cdr_type_selector, 1, 1)

        # 输入框
        cdr_string_label = QLabel("CDR String:")
        self.cdr_string_input = QLineEdit()
        self.cdr_string_input.setStyleSheet("height: 40px; padding: 5px; font-size: 14px;")
        analysis_cdr_layout.addWidget(cdr_string_label, 2, 0)
        analysis_cdr_layout.addWidget(self.cdr_string_input, 2, 1)

        # 清除按钮
        clear_button = QPushButton("Clear")
        clear_button.setStyleSheet("height: 30px; padding: 5px; font-size: 14px;")
        clear_button.clicked.connect(self.clear_cdr_string)
        analysis_cdr_layout.addWidget(clear_button, 2, 2)  # 放置在文本框的右上方

        # 查询按钮
        analysis_cdr_button = QPushButton("分析")
        analysis_cdr_button.setStyleSheet("height: 30px; padding: 5px; font-size: 14px;")
        analysis_cdr_button.clicked.connect(self.analyze_cdr)
        analysis_cdr_layout.addWidget(analysis_cdr_button, 3, 0, 1, 3)

        # 查询结果区域
        self.analysis_cdr_result_text_edit = QTextEdit()
        self.analysis_cdr_result_text_edit.setReadOnly(True)
        self.analysis_cdr_result_text_edit.setStyleSheet("border: 1px solid #ccc; padding: 5px; font-size: 16px;")
        analysis_cdr_layout.addWidget(self.analysis_cdr_result_text_edit, 4, 0, 1, 3)

        # 添加到分析功能布局中
        analysis_layout.addWidget(analysis_cdr_widget)

    def on_query_type_changed(self, current_text):
        index = 0 if current_text == "查表" else 1
        self.query_content_stacked_widget.setCurrentIndex(index)

    def query_tab_1(self):
        try:
            # 显示查表输入框的内容
            table_name = self.query_table_input1.text()
            config_name = self.query_table_input2.text()
            result = f"Table Name: {table_name}\nConfig Name: {config_name}"
            self.query_table_result_text_edit.setText(result)
        except Exception as e:
            print(f"Error in query_tab_1: {e}")

    def query_tab_2(self):
        try:
            # 显示查字段输入框的内容
            menu_dir = self.query_field_input1.text()
            page_name = self.query_field_input2.text()
            result = f"MenuDir: {menu_dir}\nPageName: {page_name}"
            self.query_field_result_text_edit.setText(result)
        except Exception as e:
            print(f"Error in query_tab_2: {e}")

    def analyze_cdr(self):
        try:
            # 获取输入框的内容
            cdr_string = self.cdr_string_input.text()
            # 获取下拉框的选择
            cdr_type = self.cdr_type_selector.currentText()
            # 进行分析处理
            result = f"Analysis Result for CDR String: {cdr_string} (Type: {cdr_type})"
            self.analysis_cdr_result_text_edit.setText(result)
        except Exception as e:
            print(f"Error in analyze_cdr: {e}")

    def clear_cdr_string(self):
        # 清空输入框的内容
        self.cdr_string_input.clear()

if __name__ == '__main__':
    app = QApplication(sys.argv)
    window = MyApp()
    window.show()
    sys.exit(app.exec_())